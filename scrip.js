// Get all friend request elements
const friendRequests = document.querySelectorAll('.friendRequest');

// Add click event listeners to each friend request
friendRequests.forEach(friendRequest => {
  friendRequest.addEventListener('click', () => {
    // Get the friend request ID
    const friendRequestId = friendRequest.dataset.id;

    // Send a request to the server to accept the friend request
    fetch(`/api/friends/accept/${friendRequestId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // If the friend request was accepted successfully, remove the friend request element
      if (data.success) {
        friendRequest.remove();
      }
    });
  });
});

// Add click event listeners to each reject button
const rejectButtons = document.querySelectorAll('.reject');
rejectButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the friend request ID
    const friendRequestId = button.closest('.friendRequest').dataset.id;

    // Send a request to the server to reject the friend request
    fetch(`/api/friends/reject/${friendRequestId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // If the friend request was rejected successfully, remove the friend request element
      if (data.success) {
        button.closest('.friendRequest').remove();
      }
    });
  });
});