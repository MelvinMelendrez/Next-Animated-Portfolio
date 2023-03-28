import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const BigCard = () => (
    <div>
        <Card css={{ w: "80%", h: "400px", margin: "auto 10%" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                    Your day your way
                    </Text>
                    <Text h3 color="white">
                    Your checklist for better sleep
                    </Text>
                </Col>
            </Card.Header>

            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="https://nextui.org/images/card-example-5.jpeg"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt="Relaxing app background"
                    />
            </Card.Body>

            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                    }}
                    >
            </Card.Footer>
        </Card>
    </div>
);

export default BigCard;