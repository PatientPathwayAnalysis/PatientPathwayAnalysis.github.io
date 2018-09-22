
const app_bar = new Vue({
    el: '#app-bar',
    data: {
        pages: [
            {
                Description: "Individualised Patient Pathway Analysis (IPPA)",
                Name: "HOME",
                URL: "home.html"
            },
            {
                Description: "Tuberculosis in Taiwan",
                Name: "Setting: TB in Taiwan",
                URL: "setting.html"
            },
            {
                Description: "From data to pathways",
                Name: "Pathway Extraction",
                URL: "https://patientpathwayanalysis.github.io/IPPA-ext-demo/index.html"
            },
            {
                Description: "Visualise patient pathways",
                Name: "Visualisation",
                URL: "https://patientpathwayanalysis.github.io/IPPA-vis-demo/index.html"
            },
            {
                Description: "FAQ",
                Name: "FAQ",
                URL: "faq.html"
            },
            {
                Description: "Contact us",
                Name: "Contact us",
                URL: "contact.html"
            },
        ],
        activePage: 0
    },
    computed: {
        pageTitle: function() {
            return this.pages[this.activePage].Description;
        },
        activeURL: function() {
            return this.pages[this.activePage].URL;
        }
    }
});

