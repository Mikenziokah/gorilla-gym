

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('joinNowForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const mobile = formData.get('mobile');
	const content = formData.get('content');

        
        if (!name || !email || !mobile) {
            alert('Please fill in all fields');
            return;
        }

        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Mobile:', mobile);
	console.log('content:', content);
        
        form.reset();
    });
});
