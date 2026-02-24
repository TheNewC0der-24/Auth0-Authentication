import { Navigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, CircularProgress } from "@mui/material";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth0();
    const location = useLocation();

    if (isLoading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress />
            </Box>
        )
    }

    if (!isAuthenticated) {
        return <Navigate to="/welcome" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;