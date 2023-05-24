import React from 'react';
import { Marker, MarkerConfiguration } from './marker';
import './styles.css';
export declare type ControlSelection = 'FullScreen' | 'Play' | 'Progress' | 'Time' | 'Volume' | 'LastFrame' | 'NextFrame' | 'AddMarker' | 'ExportMarkers' | 'ImportMarkers';
export declare type SettingsSelection = 'Title' | 'FPS' | 'Repeat' | 'StartTime' | 'Volume';
export interface ProgressProps {
    currentTime: number;
    duration: number;
    percentage: number;
}
export interface ChildRef {
    onManualMarkerAdd: () => void;
}
interface Props {
    url: string;
    controls?: ControlSelection[];
    height?: string;
    width?: string;
    isPlaying: boolean;
    volume: number;
    loop?: boolean;
    markers?: Marker[];
    timeStart?: number;
    fps?: number;
    ref?: React.MutableRefObject<ChildRef | null>;
    onPlay?: () => void;
    onPause?: () => void;
    onVolume?: (volume: number) => void;
    onProgress?: (event: Event, props: ProgressProps) => void;
    onDuration?: (duration: number) => void;
    onMarkerClick?: (marker: Marker) => void;
    onMarkerAdded?: (marker: Marker) => void;
    onLoadedMetadata?: (event: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
    onVideoPlayingComplete?: (props: ProgressProps) => void;
    selectedMarker?: Marker;
    viewSettings?: SettingsSelection[];
    markerConfiguration?: MarkerConfiguration;
}
declare const VideoPlayer: React.ForwardRefExoticComponent<Pick<Props, "url" | "controls" | "height" | "width" | "isPlaying" | "volume" | "loop" | "markers" | "timeStart" | "fps" | "onPlay" | "onPause" | "onVolume" | "onProgress" | "onDuration" | "onMarkerClick" | "onMarkerAdded" | "onLoadedMetadata" | "onVideoPlayingComplete" | "selectedMarker" | "viewSettings" | "markerConfiguration"> & React.RefAttributes<ChildRef>>;
export default VideoPlayer;
