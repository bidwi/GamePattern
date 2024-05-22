function showHiddenText(questionId) {
     var demoElement = document.getElementById(questionId);

     if (demoElement.innerHTML === "Anda harus membeli sniper terlebih dahulu, setelah itu kamu bisa menunggu hingga malam hari saat bulan muncul dari langit. Aim snipermu ke arah bulan dan tembak bulannya, semakin banyak tembakan dari sniper, maka semakin besar pula ukuran bulannya. Jika bulan sudah terlalu besar, maka bulannya akan kembali ke ukuran semula") {
         demoElement.innerHTML = "";
     } else if (demoElement.innerHTML === "Untuk bisa mengunjungi cave Minecraft di Borderlands 2, hal pertama yang harus kamu lakukan ada menyelesaikan chapter 9 an pergi ke Guardian Ruins. Di juga ada creeper, mob minecraft yang paling populer!") {
         demoElement.innerHTML = "";
     } else if (questionId === 'pertanyaan-1') {
         demoElement.innerHTML = "Anda harus membeli sniper terlebih dahulu, setelah itu kamu bisa menunggu hingga malam hari saat bulan muncul dari langit. Aim snipermu ke arah bulan dan tembak bulannya, semakin banyak tembakan dari sniper, maka semakin besar pula ukuran bulannya. Jika bulan sudah terlalu besar, maka bulannya akan kembali ke ukuran semula";
     } else if (questionId === 'pertanyaan-2') {
         demoElement.innerHTML = "Untuk bisa mengunjungi cave Minecraft di Borderlands 2, hal pertama yang harus kamu lakukan ada menyelesaikan chapter 9 an pergi ke Guardian Ruins. Di juga ada creeper, mob minecraft yang paling populer!";
     }
 }