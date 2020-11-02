import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBtnAction, editBtnAction } from '../../redux/actions/UserManagerActions';
import { ButtonUpdate, ButtonDelete } from '../Components/Button';
import { Table, Thead, Tr, Th, Td, Tbody } from '../Components/Table';

class UserListTable extends Component {

    renderUserListArr = () => {
        return this.props.userListArr.map((user, index) => {
            return (
                <Tr key={index}>
                    <Td>{++index}</Td>
                    <Td>{user.userName}</Td>
                    <Td>{user.fullName}</Td>
                    <Td>{user.password}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.phoneNum}</Td>
                    <Td>{user.userType}</Td>
                    <Td>
                        <ButtonUpdate disabled={this.props.btnEdit.status} style={{cursor: this.props.btnEdit.cssAttr}} value={user.userName} onClick={(e) => {
                            this.props.dispatch(editBtnAction(e.target.value));
                        }}>Chỉnh sửa</ButtonUpdate>
                        <ButtonDelete disabled={this.props.btnDelete.status} style={{cursor: this.props.btnDelete.cssAttr}} className="ml-lg-2 m-sm-2" value={user.userName} onClick={(e) => {
                            this.props.dispatch(deleteBtnAction(e.target.value));
                        }}>Xóa</ButtonDelete>
                    </Td>
                </Tr>
            );
        });
    }

    render() {
        return (
            <Table>
                <Thead>
                    <Tr>
                        <Th>STT</Th>
                        <Th>Tài khoản</Th>
                        <Th>Họ tên</Th>
                        <Th>Mật khẩu</Th>
                        <Th>Email</Th>
                        <Th>Số điện thoại</Th>
                        <Th>Loại người dùng</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {this.renderUserListArr()}
                </Tbody>
            </Table>
        )
    }
}

const mapStateToProps = state => ({
    userListArr: state.UserManagerReducer.userListArr,
    btnEdit: state.UserManagerReducer.disabledStatus.btnEdit,
    btnDelete: state.UserManagerReducer.disabledStatus.btnDelete,
});

export default connect(mapStateToProps)(UserListTable);