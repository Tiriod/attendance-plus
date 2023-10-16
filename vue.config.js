module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/element-variables.scss";`
            }
        }
    }
};
