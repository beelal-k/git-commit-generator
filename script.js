// const hello = document.getElementById('hello')
// hello.style.color = "red";
fetch("https://whatthecommit.com")
    .then((resp) => resp.json())
    .then((data) => data)



function generateMsg() {

    document.getElementById('hello').innerText = "Loading...";
    $.get('https://whatthecommit.com/').then(function (html) {

        // Success response
        var $prev = $(html).find('#content p');
        // $prev.find("p");
        console.log($prev)
        // document.write($prev.prevObject[9].children[0].innerText);
        document.getElementById('hello').innerText = $prev.prevObject[9].children[0].innerText;
    }, function () {
        // Error response
        document.write('Access denied');
    });

}

generateMsg()

const genBtn = document.getElementById('commitBtn');
genBtn.addEventListener('click', () => {
    generateMsg();

})

const cmtBtn = document.getElementById('generateBtn');
cmtBtn.addEventListener('click', async () => {
    const content = document.getElementById('hello').textContent;
    await navigator.clipboard.writeText(content);
})