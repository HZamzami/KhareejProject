
function follow(e) {
    var followButton = e;

    if (followButton.textContent == "+ Follow") {
        // *** State Change: To Following ***
        // We want the button to squish (or shrink) by 10px as a reaction to the click and for it to last 100ms

        // then now we want the button to expand out to it's full state
        // The left translation is to keep the button centred with it's longer width
        //   followButton.style.width = parseInt(getComputedStyle(followButton).width) + 45 + "px";
        //   followButton.style.left = parseInt(getComputedStyle(followButton).left) - 15 + "px";
        followButton.style.color = "#fff";
        followButton.textContent = "Following";

        // Animate the background transition from white to green.
        followButton.style.transition = "background-color 1s, border-color 1s";
        followButton.style.backgroundColor = "#2EB82E";
        followButton.style.borderColor = "#2EB82E";
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'Fetch PUT Request Example' })
        };
        fetch('/tas/followed/1', requestOptions)
            .then(response => response.json())
            .then(data => element.innerHTML = data.updatedAt );
    } else {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'Fetch PUT Request Example' })
        };
        fetch('/tas/Unfollowed/1', requestOptions)
            .then(response => response.json())
            .then(data => element.innerHTML = data.updatedAt );

        // *** State Change: Unfollow ***     
        // Change the button back to it's original state
        //   followButton.style.width = parseInt(getComputedStyle(followButton).width) - 45 + "px";
        //   followButton.style.left = parseInt(getComputedStyle(followButton).left) + 15 + "px";
        followButton.textContent = "+ Follow";
        followButton.style.color = "#3399FF";
        followButton.style.backgroundColor = "#ffffff";
        followButton.style.borderColor = "#3399FF";
    }
}







window.addEventListener("load", (event) => {
    const rows = document.querySelectorAll(".table tbody tr td:nth-child(1)  div div:nth-child(2) h5");
    rows.forEach((row) => {
        // console.log(row.innerHTML);
    })


    const filters = document.querySelectorAll('.filter-select')
    filters[0].value = "University";
    filters[1].value = "Major";
    filters[2].value = "Status";
    const filter4 = document.getElementById("Following");
    filter4.checked = false


});

const searchBar = document.querySelector('.search-input');
const rows = document.querySelectorAll(".table tbody tr");
// const names = document.querySelectorAll(".td:nth-child(1)  div div:nth-child(2) h5");

searchBar.addEventListener('keyup', function (event) {
    const searchText = event.target.value.toLowerCase();
    console.log(searchText);

    rows.forEach(function (row) {
        const name = row.querySelector("td:nth-child(1)  div div:nth-child(2) h5").textContent.toLowerCase();
        console.log(name);
        if (name.includes(searchText)) {
            row.style.display = "table-row"
        } else {
            row.style.display = "none"
        }
    });
});
function filter() {



    const filters = document.querySelectorAll('.filter-select')
    const filter1 = filters[0].value;
    const filter2 = filters[1].value;
    const filter3 = filters[2].value;
    const filter4 = document.getElementById("Following");

    // console.log(filter4.checked);




    const Chosenfilters = document.querySelectorAll('.chosen-card')



    // const cards = document.querySelectorAll('.card1');



    const rows = document.querySelectorAll(".table tbody tr");

    Chosenfilters[0].style.display = "none";
    Chosenfilters[1].style.display = "none";
    Chosenfilters[2].style.display = "none";

    rows.forEach((row) => {
        row.style.display = "table-row"
    })

    rows.forEach((row) => {
        console.log(row.querySelector("td:nth-child(6) button").innerHTML);



        if (row.querySelector("td:nth-child(4) h6").innerHTML.trim() != filter1 && filter1 != "University") {
            const newElm = document.createElement('i');
            newElm.className = ('fas fa-times-circle');
            Chosenfilters[0].style.display = "inline";
            Chosenfilters[0].innerHTML = filter1;
            Chosenfilters[0].appendChild(newElm);
            row.style.display = "none"
        }
        if (row.querySelector("td:nth-child(5) h6").innerHTML.trim() != filter2 && filter2 != "Major") {
            const newElm = document.createElement('i');
            newElm.className = ('fas fa-times-circle');
            Chosenfilters[1].style.display = "inline";
            Chosenfilters[1].innerHTML = filter2;
            Chosenfilters[1].appendChild(newElm);
            row.style.display = "none"
        }
        if (row.querySelector("td:nth-child(2) h6").innerHTML.trim() != filter3 && filter3 != "Status") {
            const newElm = document.createElement('i');
            newElm.className = ('fas fa-times-circle');
            Chosenfilters[2].style.display = "inline";
            Chosenfilters[2].innerHTML = filter3;
            Chosenfilters[2].appendChild(newElm);
            row.style.display = "none"
        }
        if (row.querySelector("td:nth-child(6) button").innerHTML.trim() != "Following" && filter4.checked) {

            row.style.display = "none"
        }





    })

}

function cancelFilter(e) {
    const filters = document.querySelectorAll('.filter-select')


    if (e.id == 1) {
        filters[0].value = "University";
    }
    if (e.id == 2) {
        filters[1].value = "Major";
    }
    if (e.id == 3) {
        filters[2].value = "Status";
    }
    filter();
}

document.getElementById('cl').addEventListener('click', cl_Div);

function cl_Div() {

    document.getElementById('cl').innerHTML = "Welcome to JavaScript";

} 