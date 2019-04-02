import React from 'react';
import ConfirmDialog from './ConfirmDialog';
import Button from '@material-ui/core/Button/Button';
import { createShallow, createMount, createRender } from '@material-ui/core/test-utils';
import { Typography, DialogTitle } from '@material-ui/core';

describe('ConfirmDialog component', () => {
    let shallow: any;
    let mount: any;
    let render: any;

    beforeAll(() => {
      shallow = createShallow();
      mount = createMount();
      render = createRender();
    });

    it('renders without crashing', () => {
        const mockHandleDialogClose = jest.fn();
        const mockHandleDialogAction = jest.fn();
        const wrapper = shallow(<ConfirmDialog 
            open={true} 
            message={'Test message'} 
            handleDialogClose={mockHandleDialogClose} 
            handleDialogAction={mockHandleDialogAction}
        />);
        expect(wrapper).toMatchSnapshot();
        wrapper.find(Button).first().simulate('click');
        expect(mockHandleDialogClose.mock.calls.length).toEqual(1);
        wrapper.find(Button).last().simulate('click');
        expect(mockHandleDialogAction.mock.calls.length).toEqual(1);
        wrapper.simulate('close');
        expect(mockHandleDialogClose.mock.calls.length).toEqual(2);
    });

    it('renders message and title', () => {
        const mockHandleDialogClose = jest.fn();
        const mockHandleDialogAction = jest.fn();
        const wrapper = shallow(<ConfirmDialog 
            open={false} 
            title={'Test title'} 
            message={'Test message'} 
            handleDialogClose={mockHandleDialogClose} 
            handleDialogAction={mockHandleDialogAction}
        />);
        expect(wrapper.find(Typography).html()).toMatch(/Test message/);
        expect(wrapper.find(DialogTitle).html()).toMatch(/Test title/);
    });

    it('renders default message if param is empty', () => {
        const mockHandleDialogClose = jest.fn();
        const mockHandleDialogAction = jest.fn();
        const wrapper = shallow(<ConfirmDialog 
            open={false} 
            message={''} 
            handleDialogClose={mockHandleDialogClose} 
            handleDialogAction={mockHandleDialogAction}
        />);
        expect(wrapper.find(Typography).html()).toMatch(/Do you confirm action\?/);
    });

    it('renders default values in title and Yes No buttons', () => {
        const mockHandleDialogClose = jest.fn();
        const mockHandleDialogAction = jest.fn();
        const wrapper = shallow(<ConfirmDialog 
            open={false} 
            message={'Test message'} 
            handleDialogClose={mockHandleDialogClose} 
            handleDialogAction={mockHandleDialogAction}
        />);
        expect(wrapper.find(DialogTitle).html()).toMatch(/Confirmation/);
        expect(wrapper.find(Button).first().html()).toMatch(/No/);
        expect(wrapper.find(Button).last().html()).toMatch(/Yes/);
    });

    it('renders Yes and No buttons', () => {
        const mockHandleDialogClose = jest.fn();
        const mockHandleDialogAction = jest.fn();
        const wrapper = shallow(<ConfirmDialog 
            open={false} 
            message={'Test message'} 
            yesButtonText={'Custom Yes'}
            noButtonText={'Custom No'}
            handleDialogClose={mockHandleDialogClose} 
            handleDialogAction={mockHandleDialogAction}
        />);
        expect(wrapper.find(Button).first().html()).toMatch(/Custom No/);
        expect(wrapper.find(Button).last().html()).toMatch(/Custom Yes/);
    });
});