import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, Icon } from '@gluestack-ui/themed'
import React from 'react'

interface ToggleModeProps {
    colorMode: "dark" | "light";
    toggleColorMode: () => void
}

const SunIcon: React.FC<typeof Ionicons> = (props) => {
    return <Ionicons name='sunny-outline' {...props} />
}
const MoonIcon: React.FC<typeof Ionicons> = (props) => {
    return <Ionicons name="moon-outline" {...props} />
}

export const ToggleMode: React.FC<ToggleModeProps> = ({ colorMode, toggleColorMode }) => {
    return (
        <Button p={0} backgroundColor={"transparent"} onPress={toggleColorMode}>
            <Icon
                as={colorMode === "dark" ? SunIcon : MoonIcon}
                size="xl"
                color="$backgroundLight700"
                sx={{
                    _dark: {
                        color: "$backgroundDark300",
                    },
                }}
                fill="currentColor"
            />
        </Button>
    )
}
