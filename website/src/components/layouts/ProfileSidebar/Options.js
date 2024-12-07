import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import PlaceIcon from "@mui/icons-material/Place";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const profileSidebarOpt = [
    {
        id: 1,
        icon: <PersonIcon />,
        text: "Thông tin Account",
        url: "/profile",
    },
    {
        id: 2,
        icon: <NotificationsIcon />,
        text: "Notification me",
        url: "/profile/notify",
    },
    {
        id: 3,
        icon: <ChromeReaderModeIcon />,
        text: "Order",
        url: "/profile/orders",
    },
    {
        id: 4,
        icon: <PlaceIcon />,
        text: "Address",
        url: "/profile/address",
    },
    {
        id: 5,
        icon: <CreditCardIcon />,
        text: "Payment",
        url: "/profile/payment",
    },
    {
        id: 6,
        icon: <RemoveRedEyeIcon />,
        text: "product viewed",
        url: "/profile/productSeen",
    },
];
