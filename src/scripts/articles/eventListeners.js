const articleEvtManager = {
    runIt(){
        this.articleLinkEvt();
    },
    articleLinkEvt(){
        document.getElementById("Home").addEventListener("click", () => {
            document.getElementById("container").innerHTML = "Welcome to the home page";
        });
    }
}

export default articleEvtManager;