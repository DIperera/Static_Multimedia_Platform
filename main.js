const movie = document.getElementById("titles");
const moviecontainer = document.getElementById("moviecontainer");
movie.addEventListener("change", function() {
    
    moviecontainer.classList.remove("expanded");
    setTimeout(() => {
    moviecontainer.innerHTML = "";

if(movie.value === "2"){
    moviecontainer.innerHTML = `
            <h2 class="heading">Horror Movies appears below : </h2>
            <div id = "horrorcontainer">
                <div class="horror" id="h1">
                    <label>Name : The Conjuring </label><br>
                    <label>IMDB : 7.3 / 10 </label><br>
                    <iframe src="https://www.youtube.com/embed/ejMMn0t58Lc?si=UZkchKg9bT1P2kgY" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>                  
                </div>
                <div class="horror" id="h1">
                    <label>Name : The Conjuring 2 </label><br>
                    <label>IMDB : 7.3 / 10 </label><br>
                    <iframe  
                        src="https://www.youtube.com/embed/VFsmuRPClr4?si=mptIW_kM8uyXrGjg" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>                        
                </div>
                <div class="horror" id="h1">
                    <label>Name : The Sinister </label><br>
                    <label>IMDB : 7.3 / 10 </label><br>
                    <iframe
                        src="https://www.youtube.com/embed/1wHOsphaw8c?si=-_Q1Oioi3dGK-y6v"
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>                        
                </div>
                <div class="horror" id="h1">
                    <label>Name : The Sinister </label><br>
                    <label>IMDB : 7.3 / 10 </label><br>
                    <iframe width="350px" 
                        src="https://www.youtube.com/embed/fChx_YZUAR0?si=J-ZMZdaTI9MRIMnb" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>                        
                </div>

            </div>`;
}else if(movie.value === "3"){
    moviecontainer.innerHTML = `
                <h2 class="heading">Mystery Movies appears below : </h2>
                <div id = "mysterycontainer">
                    <div class="mystery" id="m1">
                        <label>Name : Smile </label><br>
                        <label>IMDB : 6.3 / 10 </label><br>
                        <iframe src="https://www.youtube.com/embed/BcDK7lkzzsU?si=-nB6w_2wbcOhZjVk" 
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>                  
                    </div>
                    <div class="mystery" id="m1">
                        <label>Name : The Nun 1 </label><br>
                        <label>IMDB : 6.3 / 10 </label><br>
                        <iframe  
                            src="https://www.youtube.com/embed/pzD9zGcUNrw?si=mDyx5hfKFeejFm9I" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>                        
                    </div>
                    <div class="mystery" id="m1">
                        <label>Name : The Nun 2 </label><br>
                        <label>IMDB : 6.3 / 10 </label><br>
                        <iframe
                            src="https://www.youtube.com/embed/QF-oyCwaArU?si=k9p7O5sb0unYYA1Q"
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>                        
                    </div>
                    <div class="mystery" id="m1">
                        <label>Name : The Nun 3 </label><br>
                        <label>IMDB : 6.3 / 10 </label><br>
                        <iframe  
                            src="https://www.youtube.com/embed/aM9OvISC1Dg?si=aoGPQNSh-ZUmrbm-" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>                        
                    </div>

                </div>`;
}

moviecontainer.classList.add("expanded");
}, 600);

});

function page() {
    window.location.href = "movie.html";
}

function centerDiv(button) {
    const div = button.parentElement;
    const value = div.getAttribute("data-value");

    div.classList.add('active');

    if (value === "1") {
        div.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/pzD9zGcUNrw?si=mDyx5hfKFeejFm9I" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe><br><button onclick="skip()">Back</button>`;
    } else if (value === "2") {
        div.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/aM9OvISC1Dg?si=aoGPQNSh-ZUmrbm-" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe><br><button onclick="skip()">Back</button>`;
    } else if (value === "3") {
        div.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/ejMMn0t58Lc?si=UZkchKg9bT1P2kgY" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe><br><button onclick="skip()">Back</button>`;
    } else if (value === "4") {
        div.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/VFsmuRPClr4?si=mptIW_kM8uyXrGjg" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe><br><button onclick="skip()">Back</button>`;
    } else if (value === "5") {
        div.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/fChx_YZUAR0?si=J-ZMZdaTI9MRIMnb" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe><br><button onclick="skip()">Back</button>`;
    } else if (value === "6") {
        div.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/BcDK7lkzzsU?si=-nB6w_2wbcOhZjVk" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe><br><button onclick="skip()">Back</button>`;
    } 

    // Scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });

}

function skip(){
    location.reload();
}
/*const horror = document.getElementById("horror").innerHTML;
const horrormovies = `<h3 style="color:red">Latest horror movies...</h3><br>`+ horror;//here only ` can be used*/

