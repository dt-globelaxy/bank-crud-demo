import * as React from 'react';
import { Switch, Route } from 'react-router-dom'
import AccountsList from '../account/AccountList';
import BankList from '../bank/BankList';
import { RoutePaths } from './constants';
import BranchList from '../branch/BranchList';
import BankCreateForm from '../bank/BankCreateForm';
import BankUpdateForm from '../bank/BankUpdateForm';
import BranchUpdateForm from '../branch/BranchUpdateForm';
import BranchCreateForm from '../branch/BranchCreateForm';
import AccountUpdateForm from '../account/AccountUpdateForm';
import AccountCreateForm from '../account/AccountCreateForm';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={AccountsList} />
        <Route exact path={RoutePaths.Accounts} component={AccountsList} />
        <Route exact path={RoutePaths.AccountUpdate} component={AccountUpdateForm} />
        <Route exact path={RoutePaths.AccountCreate} component={AccountCreateForm} />
        <Route exact path={RoutePaths.Banks} component={BankList} />
        <Route exact path={RoutePaths.BankUpdate} component={BankUpdateForm} />
        <Route exact path={RoutePaths.BankCreate} component={BankCreateForm} />
        <Route exact path={RoutePaths.Branches} component={BranchList} />
        <Route exact path={RoutePaths.BranchUpdate} component={BranchUpdateForm} />
        <Route exact path={RoutePaths.BranchCreate} component={BranchCreateForm} />
    </Switch>
);

export default Routes;