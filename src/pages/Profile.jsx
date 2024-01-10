import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { Tabs, Tab, TabList, TabPanels, TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{color: "white", bg: "purple.400"}}>Account Info</Tab>
        <Tab _selected={{color: "white", bg: "purple.400"}}>Task History</Tab>
      </TabList>
    
      <TabPanels>
        <TabPanel>
           <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon}/>
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
              ksafjksal skldfjskl ksdfnaskl.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}/>
              fsda kjfds ksadfjkla kdfa fd.
            </ListItem>
           </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"/>
              fsadfas flsakflsd klfsak 
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"/>
              fsadfas flsakflsd klfsak 
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400"/>
              fsadfas flsakflsd klfsak 
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"/>
              fsadfas flsakflsd klfsak 
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400"/>
              fsadfas flsakflsd klfsak 
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
