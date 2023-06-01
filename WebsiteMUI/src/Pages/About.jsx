import { Typography, Box, styled } from '@mui/material'
import React from 'react'


export default function About() {
  const StyledBox = styled( Box )({
    margin: " 2% 15% 2% 15%",
    fontSize: '6rem'
  });
  return (
    <>
      <StyledBox>

        <Typography sx={{ fontSize: "1.3rem"}} align='justify' paragraph={true}>
        Welcome to "The Rustic Spoon," a hidden gem nestled in the heart of the bustling city. As you step into our cozy and inviting space, you'll be greeted by the tantalizing aromas of freshly prepared dishes and the warm smiles of our friendly staff. At The Rustic Spoon, we take pride in offering a unique dining experience that blends culinary excellence with rustic charm. Our menu showcases a fusion of flavors from around the world, curated by our team of talented chefs who are passionate about creating unforgettable dishes. <br /> <br />

        Start your culinary journey with our appetizer selection, featuring mouthwatering options like crispy calamari infused with zesty citrus flavors or delicate bruschetta drizzled with aromatic basil oil. For the main course, savor the rich and tender slow-roasted lamb shank, accompanied by a medley of roasted vegetables and creamy mashed potatoes. Alternatively, indulge in our seafood paella, brimming with succulent shrimp, tender squid, and aromatic saffron-infused rice. Vegetarian options abound, with innovative dishes like our signature butternut squash risotto, where creamy Arborio rice is delicately infused with roasted butternut squash, earthy sage, and finished with a sprinkle of Parmesan cheese. Pair your meal with a selection from our extensive wine list, carefully curated to complement the flavors of our dishes. <br /> <br />

        Save room for dessert as our pastry chef delights you with irresistible creations. From the classic tiramisu with layers of velvety mascarpone to the decadent chocolate lava cake oozing with molten chocolate, each dessert is a masterpiece that will leave your taste buds craving for more. Whether you're looking for an intimate dinner for two or a gathering with friends and family, The Rustic Spoon provides the perfect ambiance. With its warm lighting, rustic decor, and attentive service, our restaurant creates an atmosphere that will make you feel right at home. Come and experience The Rustic Spoon—a haven for food lovers seeking a culinary adventure that marries innovation and tradition, leaving you with memories that will linger long after the last bite.

        </Typography>
      </StyledBox>
    </>
  )
}
