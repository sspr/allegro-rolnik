import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme.types';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
    ${({ theme }) => theme.fonts.import};

    body{
        font-family: ${({ theme }) => theme.fonts.names.text};
        color: ${({ theme }) => theme.colors.text.main};
        font-size:${({ theme }) => theme.fontSizes.main}; 
    }

    a{
        color: ${({ theme }) => theme.colors.text.main};
    }

    a, a:hover{
        text-decoration: none;
    }

    a:hover{
        color: ${({ theme }) => theme.colors.accent.secondaryHovered};
    }

    h2{
        font-size:${({ theme }) => theme.fontSizes.header};
    }

    h3{
        font-size:${({ theme }) => theme.fontSizes.secondaryHeader};
        padding-top: ${({ theme }) => theme.dimensions.paddings.small};
    }

    h2, h3 {
        font-family: ${({ theme }) => theme.fonts.names.headers};
        font-weight: 500;
        margin-bottom: ${({ theme }) => theme.dimensions.paddings.medium};
    }

    .active{
        color: ${({ theme }) => theme.colors.accent.main};
    }
`;
