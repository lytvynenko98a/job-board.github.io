async funciton fetchJobs() {
    try {
        const response = await fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data', {
            method: 'GET'
        });
        
        if(!response.ok) {
            throw new Error('Failed to fetch jobs: ${response.status}');
        }

        return response.json();
    }
    catch (e) {
        console.log(e);
    }
}