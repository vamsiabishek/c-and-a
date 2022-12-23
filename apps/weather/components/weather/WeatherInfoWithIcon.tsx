import React from "react"
import { Box, Text, Icon } from '@c-and-a/common-ui';

function WeatherInfoWithIcon({width, icon, name, value}: {width: string, icon: string, name: string, value: string | number}) {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      padding="sm"
      width={width}
      alignItems="center"
    >
      <Icon src={icon}/>
      <Box
        display="flex"
        flexDirection="column"
        p="sm"
      >
        <Text textTransform="capitalize">{name}</Text>
        <Text>{value}</Text>
      </Box>
  </Box>
  )
}

export default WeatherInfoWithIcon;