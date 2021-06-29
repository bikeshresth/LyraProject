// import './dash-side-bar.module.less';

import { Layout, Menu , Divider} from 'antd';
import React from "react";
import {render} from 'react-dom';

// import 'antd/dist/antd.css'; 
import { ImOffice,ImUsers,ImBell } from "react-icons/im";
import { RiUserSearchFill,RiRoadMapFill } from "react-icons/ri";
import { BiUserPin,BiSupport} from "react-icons/bi"
import { BsBuilding,BsFillCollectionPlayFill} from "react-icons/bs";
import {FaUsers, FaBriefcase} from "react-icons/fa";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  FileOutlined,
  AppstoreAddOutlined,
  ReconciliationOutlined,
  DollarOutlined,
  ApartmentOutlined,
} from '@ant-design/icons';


const { SubMenu } = Menu;

const { Header, Sider, Content } = Layout;

class DashSideBar extends React.Component {
  state = {
    collapsed: false,
  };

toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo"></div>
          
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<PieChartOutlined  />}>
              Dashboard 
            </Menu.Item>
            <Menu.Item key="2" icon={<ImOffice size={15} />}>
              Office Check-in
            </Menu.Item>
            <Menu.Item key="3" icon={<RiUserSearchFill size={16} />}>
              Leads
            </Menu.Item>
            <Menu.Item key="4" icon={<BiUserPin size={18} />}>
              Clients
            </Menu.Item>
            <Menu.Item key="5" icon={<ReconciliationOutlined size={18}  />}>
              Services
            </Menu.Item>
            <Menu.Item key="6" icon={<BsBuilding size={16} />}>
              Institutions
            </Menu.Item>
            <Menu.Item key="7" icon={<AppstoreAddOutlined />}>
              Products 
            </Menu.Item>
            <Menu.Item key="8" icon={<ApartmentOutlined />}>
              Applications 
            </Menu.Item>
            <SubMenu key="sub1" icon={<ImUsers size={16}/> } title="Teams">
              <Menu.Item key="9">User Roles</Menu.Item>
              <Menu.Item key="10">Offices</Menu.Item>
              <Menu.Item key="11">Departments</Menu.Item>
              <Menu.Item key="12">Agents</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<DollarOutlined />} title="Accounts">
              <Menu.Item key="13">Invoice</Menu.Item>
              <Menu.Item key="14">Quotation</Menu.Item>
              <Menu.Item key="15">Payments</Menu.Item>
              <Menu.Item key="16">Invoice Schedule </Menu.Item>
              <Menu.Item key="17">Income Sharing</Menu.Item>
              <Menu.Item key="18">Group Invoice</Menu.Item>
            </SubMenu>
            <Menu.Item key="19" icon={<FaUsers size={16} />}>
              Agents
            </Menu.Item>
            <Menu.Item key="20" icon={<FaBriefcase />}>
             Tasks
            </Menu.Item>
            <SubMenu key="sub3" icon={<FileOutlined/>} title="Reports">
              <Menu.Item key="21">Clients</Menu.Item>
              <Menu.Item key="22">Applications</Menu.Item>
              <Menu.Item key="23">Invoice</Menu.Item>
              <Menu.Item key="24">Office Check-in </Menu.Item>
              <Menu.Item key="25">Sales Forecast</Menu.Item>
              <Menu.Item key="26">Tasks</Menu.Item>
            </SubMenu>
            <Divider style={{ borderWidth: 0.1, borderColor: 'grey' }} />
            <Menu.Item key="27" icon={<RiRoadMapFill size={18}  />}>
              Roadmaps
            </Menu.Item>
            <Menu.Item key="28" icon={<ImBell size={16} />}>
              Change Log
            </Menu.Item>
            <Menu.Item key="29" icon={<BsFillCollectionPlayFill />}>
              Onboarding 
            </Menu.Item>
            <Menu.Item key="30" icon={<BiSupport size={18}/>}>
              Lyra Support 
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 12}}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Welcome to Lyra
          </Content>
        </Layout>
      </Layout>
    );
  }
}
render(<DashSideBar/>,document.querySelector("#root")); 

export default DashSideBar;
