import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://media.gettyimages.com/id/1177087114/photo/prime-minister-of-pakistan-imran-khan-during-the-74th-session-of-the-general-assembly-at-the.jpg?s=612x612&w=gi&k=20&c=TI1JjV__Uuw_0E8V6eBs6zLUR8lhMfZag6QHSWZbAAY=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}