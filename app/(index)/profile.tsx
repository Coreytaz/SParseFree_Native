import React, { FC } from 'react';
import { Avatar, Button, ButtonText, Center, HStack, ScrollView, Text, VStack, View } from '@gluestack-ui/themed';
import { ViewProps } from 'react-native';

export default function TabTwoScreen() {
    return (
        <View>
            <ScrollView>
                <VStack px="$5" py="$4" space="lg" flex={1}>
                    <ProfileCard />
                    <LogoutButton />
                </VStack>
            </ScrollView>
        </View>
    );
}

interface ProfileCardProps extends ViewProps { }

const ProfileCard: FC<ProfileCardProps> = (props) => {
    return (
        <Center w="$full" justifyContent="space-between" alignItems="center" {...props}>
            <HStack flexDirection="column" alignItems='center' space="md">
                <Avatar borderRadius="$full" bg="$purple600" size='2xl'>
                    <Avatar.FallbackText>Henry Stan</Avatar.FallbackText>
                    <Avatar.Image
                        source={{
                            uri: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1504020/397b0a7e2d1355bca92d3e803270f7947ba973aa.gif",
                        }}
                        alt="img-profile"
                    />
                </Avatar>
                <VStack>
                    <Text size="2xl">CoreyTaz</Text>
                </VStack>
            </HStack>
        </Center>
    );
};

const LogoutButton = ({ setOpenLogoutAlertDialog }: any) => {
    return (
        <Button
            borderRadius="$xl"
            action="secondary"
            variant="outline"
            onPress={() => {
                setOpenLogoutAlertDialog(true);
            }}
        >
            <ButtonText>Logout</ButtonText>
        </Button>
    );
};