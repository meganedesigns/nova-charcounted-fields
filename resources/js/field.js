Nova.booting((Vue, router) => {
    Vue.component('index-text-counted', require('./components/TextCounted/IndexField.vue'));
    Vue.component('detail-text-counted', require('./components/TextCounted/DetailField.vue'));
    Vue.component('form-text-counted', require('./components/TextCounted/FormField.vue'));

    Vue.component('index-textarea-counted', require('./components/TextareaCounted/IndexField.vue'));
    Vue.component('detail-textarea-counted', require('./components/TextareaCounted/DetailField.vue'));
    Vue.component('form-textarea-counted', require('./components/TextareaCounted/FormField.vue'));
})
