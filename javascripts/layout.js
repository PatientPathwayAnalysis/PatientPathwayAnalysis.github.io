
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
                Description: "From data to pathways",
                Name: "Patient Pathway Extraction",
                URL: "https://patientpathwayanalysis.github.io/IPPA-ext-demo/"
            },
            {
                Description: "Visualise patient pathways",
                Name: "Patient Pathway Visualisation",
                URL: "https://patientpathwayanalysis.github.io/IPPA-vis-demo/"
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

