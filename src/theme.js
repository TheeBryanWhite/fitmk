const theme = {
    breakpoint: {
        tablet: '768px',
        desktop: '1024px'
    },
    colors: {
        black: 'rgba(0, 0, 0, 1)',
        red: 'rgba(157, 55, 55, 1)',
        white: 'rgba(255, 255, 255, 1)'
    },
    fonts: {
        youmurderer: [
            '"You Murderer"',
            'Constantia',
            '"Lucida Bright"',
            'Lucidabright',
            '"Lucida Serif"',
            'Lucida',
            '"DejaVu Serif"',
            '"Bitstream Vera Serif"',
            '"Liberation Serif"',
            'Georgia',
            'serif'
        ].join(','),
        noto: [
            '"Noto Serif"',
            'Frutiger',
            '"Frutiger Linotype"',
            'Univers',
            'Calibri',
            '"Gill Sans"',
            '"Gill Sans MT"',
            '"Myriad Pro"',
            'Myriad',
            '"DejaVu Sans Condensed"',
            '"Liberation Sans"',
            '"Nimbus Sans L"',
            'Tahoma',
            'Geneva',
            '"Helvetica Neue"',
            'Helvetica',
            'Arial',
            'sans-serif'
        ].join(',')
    }
}

export default theme