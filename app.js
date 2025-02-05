// Function to get a list of friends and select one at random

    let friends = [];

    // Collecting friends' names

document.getElementById('addFriend').addEventListener('click', function() {
    const friendInput = document.getElementById('friendInput');
    const friendName = friendInput.value.trim();

    if (friendName) {
        friends.push(friendName);
        updateFriendList();
        friendInput.value = ''; // Clear the input field
    } else {
        alert("Please enter a friend's name.");
    }
});


function updateFriendList() {
    const friendList = document.getElementById('friendList');
    friendList.innerHTML = ''; // Clear the current list

    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        friendList.appendChild(li);
    });
}

document.getElementById('pickFriend').addEventListener('click', function() {
    if (friends.length > 0) {
        const randomIndex = Math.floor(Math.random() * friends.length);
        const secretFriend = document.getElementById('secretFriend');
        secretFriend.innerHTML = ''; 
        const lin = document.createElement('li');
        lin.textContent = friends[randomIndex];
        secretFriend.appendChild(lin);
    } else {
        alert("No friends in the list to pick from.");
    }
});