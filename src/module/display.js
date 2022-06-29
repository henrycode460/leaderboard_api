import { leaderboardUrl } from "./inputData.js";
import { detailDisplay } from "./selector.js";
const apiInfo = () => {
    fetch(leaderboardUrl)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        const mydata = data.result;
        let recordContainer = ''
        mydata.forEach(el => {
            recordContainer += `<h2> ${el.user} : ${el.score}</h2>`
        });

        detailDisplay.innerHTML = recordContainer;
    })
}

export{apiInfo}