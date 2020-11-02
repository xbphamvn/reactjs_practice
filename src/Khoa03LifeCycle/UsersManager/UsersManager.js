import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { changeThemeAction } from '../../redux/actions/UserManagerActions';
import { Container } from '../Components/Container';
import { Heading3 } from '../Components/Heading';
import { ThemeSelect } from '../Components/InputForm';
import { themesArr } from '../Themes/ThemesManager';
import RegisterForm from './RegisterForm';
import UserListTable from './UserListTable';

class UsersManager extends Component {

    renderThemesArr = () => {
        return themesArr.map((theme, index) => {
            return (
                <option key={index} value={theme.id}>{theme.name}</option>
            );
        });
    }

    render() {
        return (
            <ThemeProvider theme={this.props.currentTheme}>
                <Container>
                    <Heading3 className="p-3 mb-1">Form đăng ký</Heading3>
                    <ThemeSelect className="ml-1 mb-4" onChange={(e) => {
                        this.props.dispatch(changeThemeAction(e.target.value))
                    }}>
                        <option className="text-light" disabled>- Select a theme -</option>
                        {this.renderThemesArr()}
                    </ThemeSelect>
                    <RegisterForm />
                </Container>
                <Container>
                    <Heading3 className="p-3 mb-4">Danh sách người dùng</Heading3>
                    <UserListTable />
                </Container>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    currentTheme: state.UserManagerReducer.currentTheme
});

export default connect(mapStateToProps)(UsersManager);