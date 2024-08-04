const Footer = () => {
  const time = new Date();
  return (
    <footer>&copy; Copyright {time.getFullYear()}</footer>
  )
}

export default Footer