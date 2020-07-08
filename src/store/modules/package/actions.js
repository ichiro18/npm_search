import axios from "axios";
import MarkdownIt from 'markdown-it'

export default {
    search({commit}, {query, page, limit}) {
        return new Promise((resolve, reject) => {
            axios.get(`https://registry.npmjs.com/-/v1/search?text=${query}&size=${limit}&from=${page * limit}`)
                .then(response => {
                    if (response.status === 200) {
                        const total = response.data.total;
                        const pages = Math.ceil(total / limit);
                        const items = response.data.objects.map(item => {
                            const res = {
                                name: item.package.name,
                                author: item.package.author && item.package.author.name ? item.package.author.name : '',
                                link: item.package.links.homepage || item.package.links.npm,
                                version: item.package.version,
                                description: item.package.description,
                            };

                            if (!res.author && item.package.maintainers.length) {
                                const maintainers = item.package.maintainers.map(man => man.username);
                                res.author = maintainers.join(', ');
                            }

                            if (!res.author) {
                                res.author = "Неизвестно"
                            }

                            return res
                        });

                        const res = {
                            query,
                            total,
                            page,
                            pages,
                            limit,
                            items
                        };

                        commit('setList', res.items);
                        resolve(res);
                    }
                })
                .catch(err => reject(err))
        })
    },
    read({commit}, payload) {
        return new Promise((resolve, reject) => {
            axios.get(`https://api.npms.io/v2/package/${payload.name}`)
                .then(response => {
                    if (response.status === 200) {
                        if (response.data.collected && response.data.collected.metadata) {
                            const res = {
                                name: response.data.collected.metadata.name,
                                author: response.data.collected.metadata.author && response.data.collected.metadata.author.name ? response.data.collected.metadata.author.name : '',
                                version: response.data.collected.metadata.version,
                                license: response.data.collected.metadata.license,
                                homepage: response.data.collected.metadata.links.homepage,
                                npm: response.data.collected.metadata.links.npm,
                                readme: response.data.collected.metadata.readme,
                                repository:response.data.collected.metadata.links.repository,
                                keywords:response.data.collected.metadata.keywords
                            };

                            if (res.keywords && res.keywords.length) {
                                res.keywords = res.keywords.join(', ')
                            }

                            if (res.readme) {
                                const markdown = new MarkdownIt();
                                res.readme = markdown.render(res.readme);
                            }

                            commit('setCurrent', res);

                            resolve(res);
                        }
                    } else {
                        reject(response);
                    }

                })
                .catch(err => reject(err));
        });
    },
}