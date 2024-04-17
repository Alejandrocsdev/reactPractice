function ProfilePicture(props) {
  const imageUrl = '../src/assets/580710.jpg'
  const handleClick = (e) => {
    const target = e.target
    target.style.display = "none"
    console.log('OUCH!')
  }
  return <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
}
export default ProfilePicture
