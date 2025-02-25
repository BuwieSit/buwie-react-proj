
function Content() {

    return(
        <div class="w-screen flex align-center justify-center">
            <button>
                <a href="https://www.youtube.com" target="_blank">
                P L A Y
                <div id="clip">
                    <div id="leftTop" class="corner"></div>
                    <div id="rightBottom" class="corner"></div>
                    <div id="rightTop" class="corner"></div>
                    <div id="leftBottom" class="corner"></div>
                </div>
                <span id="rightArrow" class="arrow"></span>
                <span id="leftArrow" class="arrow"></span>
                </a>
            </button>
        </div>
            
    );

}

export default Content;