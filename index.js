const heart = parseInt(document.getElementById("heart").innerText);
const coin = document.getElementById("coin").innerText;
const copy = document.getElementById("copy").innerText;

// console.log(heart, coin , copy)

// const parentCard = document.getElementById('parent-card');
// console.log(parentCard)
// const heartCard = document.getElementsByClassName('')
// parentCard.addEventListener('click', function (event) {
//     console.log(event.target.children.innerHTMl);

// })

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//delegation
// Hear Count start

function makeCall() {
    getElement("parent-card").addEventListener("click", function (e) {
    // console.log(e.target)
//     const coin = document.getElementById("coin").innerText;
//     if (Number(coin) < 20) {
        
//    }
    if (e.target.className.includes("call-btn")) {
        const serviceName = e.target.parentNode.parentNode.children[0].innerText;
        const serviceNumber = e.target.parentNode.parentNode.children[2].innerText;
        const now = new Date() 
        let coin = parseInt(document.getElementById("coin").innerText);
        if(coin<20){
            alert("Coin less not able to make call")
             return;
        }
        alert(serviceName + ' and ' + serviceNumber);
        
        // console.log(heart)
        document.getElementById("coin").innerText = coin - 20;

        const callHistoryContainer = getElement("call-history-container");

        const newCallRecord = document.createElement("div");
        // const service
        newCallRecord.innerHTML = `
        
            <div
              class="flex justify-between items-center gap-4 rounded-lg bg-gray-100 p-4">
              <div>
                <h1 class="font-semibold inter text-lg">${serviceName}</h1>
                <p class="hind text-lg text-[#5c5c5c]">${serviceNumber}</p>
              </div>
              <div>
                <p class="hind text-lg">${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}</p>
              </div>
            </div>
        
        `
        callHistoryContainer.appendChild(newCallRecord);

        
    }
    
});
}
//  heart count end

function heartCount() {
    // star mark Count start
getElement("parent-card").addEventListener("click", function (e) {
    // console.log(e.target)
   
    if (e.target.className.includes("heart-icon")) {
        // alert("card clicked");
        let heart = parseInt(document.getElementById("heart").innerText);
        // console.log(heart)
        document.getElementById("heart").innerText = heart + 1
         
    }
    
});
}


function copyCount() {
    // star mark Count start
getElement("parent-card").addEventListener("click", function (e) {
    // console.log(e.target)
   
    if (e.target.className.includes("copy-btn")) {
        // alert("card clicked");
        let copy = parseInt(document.getElementById("copy").innerText);
        // console.log(heart)
        document.getElementById("copy").innerText = copy + 1
         
    }

  if(e.target.className.includes("copy-text")){
    const textElement = e.target.parentNode.parentNode.children[2].innerText;

      // Step 2: Get the text content
      const textToCopy = textElement.textContent;

      // Step 3: Use the Clipboard API to copy the text
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // Optional: Show confirmation
          alert("Text copied to clipboard!");
        })
        .catch(err => {
          console.error("Failed to copy text: ", err);
        });
  }
    
});
}


// Clear call history
document.getElementById("clear-btn").addEventListener('click', function () {
            document.getElementById("call-history-container").innerHTML = "";
        })
//  start mark count end

const serviceName = document.getElementsByClassName("call-btn")[0].parentNode.parentNode.children[0].innerText;
const serviceNumber = document.getElementsByClassName("call-btn")[0].parentNode.parentNode.children[2].innerText;
const now = new Date()   
// console.log(now.getHours())

// getElement("parent-card").addEventListener("click", function (e) {
//     console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].innerHTML)
//  })
heartCount();
makeCall();
copyCount();

