export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <circle cx="32" cy="20" r="12" fill="#FFD1DC" />
            <path d="M32 32c-8 0-16 4-16 12v4h32v-4c0-8-8-12-16-12z" fill="#FFD1DC" />
            <path d="M20 44c0 4 4 8 12 8s12-4 12-8" stroke="#000" />
            <path d="M24 24c2 2 4 2 8 0" stroke="#000" />
            <circle cx="26" cy="18" r="2" fill="#000" />
            <circle cx="38" cy="18" r="2" fill="#000" />
            <path d="M32 4c-4 0-8 2-8 6s4 6 8 6 8-2 8-6-4-6-8-6z" fill="#FFD1DC" />
            <path d="M24 10c0 2 2 4 8 4s8-2 8-4" stroke="#000" />
        </svg>
    );
}
