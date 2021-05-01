const app = Vue.createApp({
    // template: '<h2> I am the template</h2>'
    data() {
        return {
            showBooks: true, 
            title: 'The Final Empire', 
            author: 'Brandon', 
            books: [
                {title:'A new hope', author: 'Billy'},
                {title:'Oddissee', author: 'Homerus'},
                {title:'Staatsblad', author: 'RVS'}
            ],
            age: 45, 
            x: 0, 
            y: 0, 
            url: "https://www.opensource.com"
        }
    }, 
    methods: {
        changeTitle(title) {
            this.title = title
        }, 
        toggleShowBooks() {
            this.showBooks=!this.showBooks
        }, 
        handleEvent(e) {
            console.log(e, e.type)
        }, 
        handleMouseMove(e) {
            //console.log(e)
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})
app.mount("#app")