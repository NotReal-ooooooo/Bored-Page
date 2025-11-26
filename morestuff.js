       const accessKey = "hippopotomonstrosesquippedaliophobia";
const userKey = prompt("Insert Access Key");
if (userKey !== accessKey) {
   setTimeout(() => {
        window.open('', '_self');
        window.close();
      }, 1);
}
