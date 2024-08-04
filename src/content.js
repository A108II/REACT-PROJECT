const Content = () => {
  const handleRandomNames = () => {
    const name = ['Jamie', 'Dwayne', 'Chris'];
    const int = Math.floor(Math.random() * 3);
    return name[int];
  }
  return (
    <main>
      <p>
        Hello {handleRandomNames()}
      </p>
      
    </main>
  )
}

export default Content