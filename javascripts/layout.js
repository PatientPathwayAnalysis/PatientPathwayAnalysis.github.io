
var app_bar = new Vue({
    el: '#app-bar',
    data: {
        pages: [
            {
                Description: "From data to pathways",
                Name: "Patient Pathway Extraction",
                URL: "https://patientpathwayanalysis.github.io/IPPA-ext-demo/index.html"
            },
            {
                Description: "Visualise patient pathways",
                Name: "Patient Pathway Visualisation",
                URL: "https://patientpathwayanalysis.github.io/IPPA-vis-demo/index.html"
            }
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
