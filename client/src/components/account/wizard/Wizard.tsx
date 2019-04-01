import * as React from 'react';
import { Form } from 'react-final-form';
import { IAccountFormModel } from './models';
import Button from '@material-ui/core/Button/Button';
import { MutationFn, OperationVariables } from 'react-apollo';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

interface IWizardFormProps {
    mutation: MutationFn<any, OperationVariables>;
    initialValues?: IAccountFormModel | undefined;
    children: React.ReactNode;
}

interface IWizardFormState {
    page: number
    lastPageIndex: number
    values:  Partial<IAccountFormModel>
}

export default class Wizard extends React.Component<IWizardFormProps, IWizardFormState> {

    public static Page = ({ children }: any) => children

    constructor(props: IWizardFormProps) {
      super(props)
      this.state = {
        page: 0,
        lastPageIndex: React.Children.count(this.props.children) -1 ,
        values: props.initialValues || {}
      }
    }

    next = (values: IAccountFormModel) =>  this.setState(state => ({page: Math.min(state.page + 1, state.lastPageIndex), values}))
    
  
    previous = () => this.setState(state => ({ page: Math.max(state.page - 1, 0)}));

    validate = (values: any)  => {
        const activePage: any = React.Children.toArray(this.props.children)[
          this.state.page
        ]
        
        const validation = activePage.props.validate ? activePage.props.validate(values) : {}
        return validation;
    }

    handleSubmit = (values: any)  => {
        const { page, lastPageIndex } = this.state
        const isLastPage = page === lastPageIndex
        if (isLastPage) {
          values.number = parseInt(values.number);
          return  this.props.mutation({ variables: values }).catch(({ graphQLErrors }) => {
            return graphQLErrors && graphQLErrors.length && graphQLErrors[0].extensions.exception.fields;
          }); 
        } else {
          this.next(values)
        }
    }

    render() {
        const { children } = this.props
        const { page, values, lastPageIndex } = this.state
        const childrenArray = React.Children.toArray(children) as any[];
        const activePage = childrenArray[page]
        const isLastPage = page === lastPageIndex
        return (
          <Form
            initialValues={values}
            validate={this.validate}
            onSubmit={this.handleSubmit}>
            {({ handleSubmit, submitting, values }) => (
              <form onSubmit={handleSubmit}>
                <Stepper activeStep={page}>
                  {childrenArray.map((item, index) => {
                    return (
                      <Step key={index}>
                        <StepLabel>{item.props.label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                {activePage}
                <div style={{marginTop: 16}}>
                  {page > 0 && (<Button onClick={this.previous}>Previous</Button>)}
                  <Button type="submit" variant="contained" color="primary" disabled={submitting}>
                    {isLastPage ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </form>
            )}
          </Form>
        )
      }
}