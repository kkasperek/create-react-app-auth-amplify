import React, { Component } from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {
  Grid, Menu, Segment, Sidebar, Icon, Header
} from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'home',
      mainContent: 'Something goes here...'
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, { name }) {
    console.log('click')
    this.setState({ activeItem: name, mainContent: `on page ${name}` })
  }

  render() {
    const { activeItem, mainContent } = this.state

    return (
      <div>
        <AmplifySignOut />

        <Grid stretched>
          <Grid.Column stretched style={{ height: 'calc(100vh - 2em)' }}>

            <Sidebar.Pushable style={{ overflow: 'hidden' }}>
              <Sidebar
                as={Menu}
                animation="push"
                direction="left"
                icon="labeled"
                vertical
                visible
                width="thin"
              >
                <Menu.Item
                  name="home"
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                >
                  <Icon name="home" />
                  Home
                </Menu.Item>
                <Menu.Item
                  name="games"
                  active={activeItem === 'games'}
                  onClick={this.handleItemClick}
                >
                  <Icon name="gamepad" />
                  Games
                </Menu.Item>
                <Menu.Item
                  name="channel"
                  active={activeItem === 'channel'}
                  onClick={this.handleItemClick}
                >
                  <Icon name="camera" />
                  Channels
                </Menu.Item>
              </Sidebar>

              <Sidebar.Pusher style={{ height: '100vh' }}>
                <Segment basic>
                  <Header as="h3">Application Content</Header>
                  { mainContent }
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>

          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default withAuthenticator(App)
