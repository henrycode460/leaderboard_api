import { apiInfo } from "./display.js";
import { nameValue, scoreValue } from "./selector.js";
const leaderboardUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xTl0161xUOaP5qKiRc3eEHVMSyORP/scores';

 const addData = async () => {
    try {
      const res = await fetch(leaderboardUrl, {
        method: 'POST',
        body: JSON.stringify({
          user: nameValue.value,
          score: scoreValue.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      nameValue.value = '';
      scoreValue.value = '';
        apiInfo();
      return res.json();
    } catch (error) {
      
      return false;
    }
  };

export{addData, leaderboardUrl}