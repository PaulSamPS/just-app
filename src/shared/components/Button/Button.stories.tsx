import { Meta, StoryObj } from '@storybook/react';
import { Canvas, Controls, Description, Subtitle, Title, ColorPalette, ColorItem } from '@storybook/blocks';
import { Button } from './Button';
import { PlusIcon } from '@/shared/assets';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    {/* eslint-disable-next-line no-use-before-define */}
                    <Canvas of={Primary} />
                    <Controls />

                    <ColorPalette>
                        <ColorItem
                            title='Blue'
                            subtitle='Blue используемый в кнопке'
                            colors={{
                                BlueThemed: '#447BBA',
                                BlueHover: '#4177B5',
                                BlueActive: '#3F72B0'
                            }}
                        />
                        <ColorItem
                            title='Green'
                            subtitle='Green используемый в кнопке'
                            colors={{
                                Green: '#4BB34B',
                                GreenHover: '#48AC4A',
                                GreenActive: '#45A64A'
                            }}
                        />
                        <ColorItem
                            title='Steel Gray'
                            subtitle='Steel Gray используемый в кнопке'
                            colors={{
                                SteelGrayThemed: 'rgb(229 235 241 / 99%)',
                                SteelGrayHover: 'rgb(213 224 234 / 99%)',
                                SteelGrayActive: 'rgb(200 212 224 / 99%)',
                                SteelGrayBgHover: '#EDEFF2',
                                SteelGrayBgActive: '#E3E5EB'
                            }}
                        />
                    </ColorPalette>
                </>
            )
        }
    },
    argTypes: {
        size: {
            description: 'Button size',
            defaultValue: 'm',
            options: ['s', 'm', 'l'],
            control: {
                type: 'radio',
            },
        },
        appearance: {
            description: 'Button appearance',
            type: 'string',
            defaultValue: 'primary',
            options: [
                'primary',
                'secondary',
                'outline',
                'commerce',
                'overlay-primary',
                'overlay-secondary',
                'overlay-outline'
            ],
            control: {
                type: 'radio',
            },
        },
        before: {
            description: 'icon',
            defaultValue: false,
            options: [<PlusIcon />, false],
            control: {
                type: 'select',
            }
        },
        after: {
            description: 'icon',
            defaultValue: false,
            options: [<PlusIcon />, false],
            control: {
                type: 'select',
            }
        },
        stretched: {
            description: '100% width',
            type: 'boolean',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        isLoading: {
            description: 'Is loading',
            type: 'boolean',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        children: {
            description: 'Text',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type StoryComponent = StoryObj<typeof Button>;
export const Primary: StoryComponent = {
    args: {
        children: 'Button',
        appearance: 'primary',
        size: 'm',
    }
};

export const Secondary: StoryComponent = {
    args: {
        children: 'Button',
        appearance: 'secondary',
        size: 'm',
    },
    parameters: {
        controls: {
            exclude: /.*/g
        }
    }
};

export const Outline: StoryComponent = {
    args: {
        children: 'Button',
        appearance: 'commerce',
        size: 'm',
    },
    parameters: {
        controls: {
            exclude: /.*/g
        }
    }
};

export const WithBefore: StoryComponent = {
    args: {
        children: 'Button',
        appearance: 'primary',
        size: 'm',
        before: <PlusIcon />,
    },
    parameters: {
        controls: {
            exclude: /.*/g
        }
    }
};

export const WithAfter: StoryComponent = {
    args: {
        children: 'Button',
        appearance: 'primary',
        size: 'm',
        after: <PlusIcon />,
    },
    parameters: {
        controls: {
            exclude: /.*/g
        }
    }
};

export const WithLoading: StoryComponent = {
    args: {
        children: 'Button',
        appearance: 'primary',
        size: 'm',
        isLoading: true
    },
    parameters: {
        controls: {
            exclude: /.*/g
        }
    }
};

export const Stretched: StoryComponent = {
    args: {
        children: 'Button',
        appearance: 'primary',
        size: 'm',
        stretched: true
    },
    parameters: {
        controls: {
            exclude: /.*/g
        }
    }
};
