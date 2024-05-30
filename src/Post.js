import Card from '@mui/material/Card';
import Container from '@mui/material/Container';

export default function Post(){
    return (
    <Container className="container">
          <Card 
            variant="outlined" 
            style={{ width: '100%', maxWidth: 300, padding: 25 }}
          >
            <div className="post">
              <div className="image">
                <img 
                  src="https://imgs.search.brave.com/bIjWPbmLzxFchD09zRQt3FdR68cloPq0BlgsuNuOdAc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvMWtZQ1ly/WVNNWUE4azliTnJX/SnNFSS80ZGYyMTE5/OWVmMzBkZWIxNmQw/MzRiYzZlYWQ3YjI3/OC9Jbm5lci1MaWZl/X1RodW1ibmFpbC5q/cGc" 
                  alt="Post Thumbnail"
                />
              </div>
              <div className="texts">
                <h2>
                  Truth Social Parent Company Suffers Over $320 Million Loss In 1st
                  Quarter Of The Year
                </h2>
                <p>
                  Trump Media & Technology Group Corp. said it made just over $770,000
                  in advertising revenue in the first three months of 2024.
                </p>
              </div>
            </div>
          </Card>
        
      </Container>
    );
}