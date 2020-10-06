new Vue({
    el: "#app",
    data: {
        Text: "",
        SelectedCase: ""
    },
    methods: {
        Cases() {
            switch(this.SelectedCase) {
            case "Upper case":
            this.Text = this.Text.toUpperCase();
            break;
            case "Lower case":
            this.Text = this.Text.toLowerCase();
            break;
            case "Reverse text":
            this.Text = this.Text.split('').reverse().join('');
            }
        },
        Clear() {
            this.Text = 0;
        }
    }
})