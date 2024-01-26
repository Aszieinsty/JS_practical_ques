async function fetchAndDisplay() {
    try {
        const titleInput = document.getElementById('titleInput');
        const title = titleInput.value.trim().toLowerCase();

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const postData = await response.json();
        
        const filteredPosts = postData.filter(post => post.title.toLowerCase().includes(title));

        const outputContainer = document.getElementById('output');
        outputContainer.innerHTML = ''; // Clear previous output

        if (filteredPosts.length > 0) {
            filteredPosts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.textContent = `Title: ${post.title}, Body: ${post.body}`;
                outputContainer.appendChild(postElement);
            });
        } else {
            const noPostsElement = document.createElement('p');
            noPostsElement.textContent = 'No matching posts found.';
            outputContainer.appendChild(noPostsElement);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}
