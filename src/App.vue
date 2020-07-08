<template>
    <div class="wrapper">
        <div
                v-if="loading"
                class="pre-loader"
        >
            <b-spinner class="loader-spinner" label="Загрузка..."></b-spinner>
        </div>
        <div class="container">
            <b-navbar type="dark" class="navbar">
                <b-navbar-brand href="#"><img class="logo" src="https://cdn.nethernite.com/assets/landing/Logo.png"
                                              alt="logo"/>
                </b-navbar-brand>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form @submit="onSubmit">
                        <b-form-input size="sm" class="mr-sm-2 input__search" placeholder="Search"
                                      v-model="query"></b-form-input>
                        <b-button size="sm" class="button " type="submit">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-navbar>
            <div class="row">
                <template v-if="list.length">
                    <div
                            class="col-sm-12 col-md-12 col-lg-6 card__item"
                            v-for="(item, key) in list"
                            :key="key">

                        <b-card img-src="https://cdn.nethernite.com/assets/landing/get-gift__layer--first_bg.png"
                                img-alt="Card image"
                                img-left
                                @click="selectPackage(item)"
                                class="mb-3 card__icon">
                            <b-card-text class="card__name">
                                {{item.name}}
                            </b-card-text>
                            <b-card-text class="card__author">
                                {{item.author}}
                            </b-card-text>
                            <b-card-text class="card__version">
                                {{item.version}}
                            </b-card-text>
                        </b-card>
                    </div>
                </template>
                <div v-else class="col-12">
                    <span class="card__warning">Ничего не найдено</span>
                </div>
            </div>
            <div v-if="list.length && pages > 1" class="wrapper--pagination">
                <b-pagination
                        :value="page"
                        :total-rows="total"
                        :per-page="limit"
                        pills
                        size="sm"
                        @input="onPaginate"
                />
            </div>
        </div>
        <div class="footer">
            <span class="footer--content">© {{currentYear}}</span>
            <span class="footer--content">Ilya Zhuravlov</span>
            <span class="footer--content"><a href="https://github.com/ichiro18" target="_blank">github</a></span>

        </div>
        <b-modal
                id="modal-scrollable"
                :visible="!!current"
                :title="currentTitle"
                class="modal-content"
                scrollable
                hide-footer
                @hide="onHideModal"
        >
            <div class="modal__content" v-if="current">
                <div class="container">
                    <div class="package__status">
                        <div class="row">
                            <div class="col-sm package__status--description">
                                <h3 class="title">author</h3>
                                {{current.author }}
                            </div>
                            <div class="col-sm package__status--description">
                                <h3 class="title">version</h3>
                                {{current.version}}
                            </div>
                            <div class="col-sm package__status--description">
                                <h3 class="title">license</h3>
                                {{current.license}}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm package__status--description">
                                <h3 class="title">homepage</h3>
                                <a :href="current.homepage" target="_blank">{{current.homepage}}</a>
                            </div>
                            <div class="col-sm package__status--description">
                                <h3 class="title">repository</h3>
                                <a :href="current.repository" target="_blank">{{current.repository}}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                        v-if="current.readme"
                        class="package__readme"
                >
                    <h3 class="title">Readme</h3>
                    <div class="content" v-html="current.readme" />
                </div>
                <div class="package__tags">
                    <h3 class="title">Tags</h3>
                    <span>{{current.keywords}}</span>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'App',
        data() {
            return {
                limit: 10,
                page: 1,
                pages: 0,
                total: 0,
                query: '',
                loading: false,
            }
        },
        computed: {
            ...mapGetters({
                list: 'package/list',
                current: 'package/current'
            }),
            currentTitle() {
                return this.current && this.current.name ? this.current.name : ''
            },
            currentYear() {
                return new Date().getFullYear()
            }
        },
        methods: {
            search(query) {
                this.loading = true;
                this.$store.dispatch('package/search', {
                    query,
                    page: this.page - 1,
                    limit: this.limit
                })
                    .then(res => {
                        this.page = res.page + 1;
                        this.pages = res.pages;
                        this.total = res.total;
                    })
                    .catch(err => console.error(err))
                    .finally(() => {
                        this.loading = false;
                    })
            },
            onSubmit(e) {
                if (e.preventDefault) e.preventDefault();
                this.search(this.query)
            },
            onPaginate(e) {
                this.page = e;
                this.search(this.query);
            },
            onHideModal() {
                this.$store.commit('package/setCurrent', null);
            },
            selectPackage(item) {
                this.loading = true;
                this.$store.dispatch('package/read', {
                    name: item.name
                })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => console.error(err))
                    .finally(() => {
                        this.loading = false
                    })
            },
        },
        // mounted() {
            // axios.get(`https://data.jsdelivr.com/v1/package/npm/jquery@3.2.1`)
            // axios.get(`https://data.jsdelivr.com/v1/package/npm/jquery/stats`)
            // axios.get(`https://registry.npmjs.com/jquery/3.2.1`)
            // axios.get(`https://registry.npmjs.org/jquery`)
            // axios.get(`https://api.npms.io/v2/package/jquery`)
            //     .then(res => console.log(res));
        // }
    }
</script>
