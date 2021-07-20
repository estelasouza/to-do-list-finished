import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const WraperHelper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const WrapperLogin = styled.section`
  display: inline-grid;
`;
export const ParagrafLeft = styled.p`
  display: inline-flex;
  margin-top: 30px;
`;
export const LinkBold = styled.a`
  font-weight: bold;
  cursor: pointer;
`;

export const LinkBoldPassword = styled.a`
  cursor: pointer;
  font-size: 15px;
`;

export const DivHidden = styled.div`
  display: ${(props) => props.divDisplay || "none"};
`;

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",

    padding: theme.spacing(2, 4, 3),
  },
}));
