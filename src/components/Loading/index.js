import { LoadingContainer } from "./style";

const Loading = () => {
    return(
        <LoadingContainer>
            <svg viewBox="0 0 100 100">
                <defs>
                <filter id="shadow">
                    <feDropShadow dx="0" dy="0" stdDeviation="1.5" 
                    floodColor="#7FFFD4"/>
                </filter>
                </defs>
                <circle id="spinner" cx="50" cy="50" r="45"
                    style={{
                        fill:'transparent',
                        stroke:'#7FFFD4',
                        strokeWidth: '7px',
                        strokeLinecap: 'round',
                        filter:'url(#shadow)', 
                    }}  
                />
            </svg>
        </LoadingContainer>
    );
}

export default Loading;