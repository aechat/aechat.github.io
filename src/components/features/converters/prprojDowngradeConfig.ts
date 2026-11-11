import {gunzipSync, gzipSync} from "fflate";

export type PrInternalVersion =
  32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45;

export interface PrVersionMetadata {
  displayVersion: string;
  internalVersion: PrInternalVersion;
  major: number;
  yearLabel: string;
}

export type PrVersionSignature = PrVersionMetadata;

export interface ParsedPrprojInfo {
  buildVersion?: string;
  detectedVersion: number;
  displayVersion: string;
  errorMessage?: string;
  headerVersion?: number;
  isGzipped: boolean;
  isHeaderModified?: boolean;
  yearLabel: string;
}

interface TagVersionThreshold {
  maxProjectVersion: number;
  tagVersion: number;
}

interface SparseChildRule {
  childTag: string;
  maxTargetVersion?: number;
  minTargetVersion?: number;
  xmlContent: string;
}

interface VideoParameterDefault {
  controlType: string;
  lowerBound: string;
  upperBound: string;
}

interface XmlStackFrame {
  children: Set<string>;
  classId: string;
  indent: string;
  isVersioned: boolean;
  tagName: string;
}

interface AdaptationContext {
  defaultPreviewFormatId: string;
  nextSequenceId: number;
  totalSequences: number;
}

export const GZIP_MAGIC_BYTE_1 = 0x1f;

export const GZIP_MAGIC_BYTE_2 = 0x8b;

const NULL_CHECK_SAMPLE_LIMIT = 4096;

const FALLBACK_PREVIEW_FORMAT_ID = "b0f75bf9-a1fa-f37f-f0e2-3a24000000fa";

export const SUPPORTED_TARGET_VERSIONS: PrInternalVersion[] = [
  45, 43, 42, 41, 40, 39, 38, 36, 34, 32,
];

export const SUPPORTED_TARGET_PR_VERSIONS = SUPPORTED_TARGET_VERSIONS;

export const PR_VERSION_SIGNATURES: Record<number, PrVersionMetadata> = {
  32: {
    displayVersion: "11.X",
    internalVersion: 32,
    major: 11,
    yearLabel: "CC 2017",
  },
  33: {
    displayVersion: "11.1",
    internalVersion: 33,
    major: 11,
    yearLabel: "CC 2017.1",
  },
  34: {
    displayVersion: "12.X",
    internalVersion: 34,
    major: 12,
    yearLabel: "CC 2018",
  },
  35: {
    displayVersion: "12.1",
    internalVersion: 35,
    major: 12,
    yearLabel: "CC 2018.1",
  },
  36: {
    displayVersion: "13.X",
    internalVersion: 36,
    major: 13,
    yearLabel: "CC 2019",
  },
  37: {
    displayVersion: "13.1",
    internalVersion: 37,
    major: 13,
    yearLabel: "CC 2019.1",
  },
  38: {
    displayVersion: "14.X",
    internalVersion: 38,
    major: 14,
    yearLabel: "2020",
  },
  39: {
    displayVersion: "15.X",
    internalVersion: 39,
    major: 15,
    yearLabel: "2021",
  },
  40: {
    displayVersion: "22.X",
    internalVersion: 40,
    major: 22,
    yearLabel: "2022",
  },
  41: {
    displayVersion: "23.X",
    internalVersion: 41,
    major: 23,
    yearLabel: "2023",
  },
  42: {
    displayVersion: "24.X",
    internalVersion: 42,
    major: 24,
    yearLabel: "2024",
  },
  43: {
    displayVersion: "25.X",
    internalVersion: 43,
    major: 25,
    yearLabel: "2025",
  },
  44: {
    displayVersion: "26.0 Beta",
    internalVersion: 44,
    major: 26,
    yearLabel: "2026 Beta",
  },
  45: {
    displayVersion: "26.X",
    internalVersion: 45,
    major: 26,
    yearLabel: "2026",
  },
};

const BUILD_PREFIX_TO_INTERNAL_VERSION: Array<{
  internalVersion: PrInternalVersion;
  prefix: string;
}> = [
  {internalVersion: 45, prefix: "26."},
  {internalVersion: 43, prefix: "25."},
  {internalVersion: 42, prefix: "24."},
  {internalVersion: 41, prefix: "23."},
  {internalVersion: 40, prefix: "22."},
  {internalVersion: 39, prefix: "15."},
  {internalVersion: 38, prefix: "14."},
  {internalVersion: 37, prefix: "13.1"},
  {internalVersion: 36, prefix: "13."},
  {internalVersion: 35, prefix: "12.1"},
  {internalVersion: 34, prefix: "12."},
  {internalVersion: 33, prefix: "11.1"},
  {internalVersion: 32, prefix: "11."},
];

const TAG_VERSION_THRESHOLDS: Record<string, TagVersionThreshold[]> = {
  ArbVideoComponentParam: [{maxProjectVersion: 43, tagVersion: 2}],
  AudioClipTrack: [{maxProjectVersion: 43, tagVersion: 6}],
  AudioClipTrackItem: [
    {maxProjectVersion: 41, tagVersion: 6},
    {maxProjectVersion: 42, tagVersion: 9},
    {maxProjectVersion: 43, tagVersion: 11},
  ],
  AudioComponentChain: [{maxProjectVersion: 43, tagVersion: 3}],
  AudioComponentParam: [{maxProjectVersion: 43, tagVersion: 9}],
  AudioFilterComponent: [
    {maxProjectVersion: 41, tagVersion: 3},
    {maxProjectVersion: 43, tagVersion: 4},
  ],
  AudioSettings: [{maxProjectVersion: 43, tagVersion: 7}],
  AudioStream: [{maxProjectVersion: 43, tagVersion: 7}],
  AudioTrack: [{maxProjectVersion: 43, tagVersion: 11}],
  AudioTrackInlet: [{maxProjectVersion: 43, tagVersion: 3}],
  AudioTransitionTrackItem: [{maxProjectVersion: 43, tagVersion: 3}],
  ClipLoggingInfo: [
    {maxProjectVersion: 33, tagVersion: 7},
    {maxProjectVersion: 42, tagVersion: 8},
    {maxProjectVersion: 43, tagVersion: 9},
  ],
  ClipTrackItem: [
    {maxProjectVersion: 37, tagVersion: 6},
    {maxProjectVersion: 43, tagVersion: 8},
  ],
  Component: [
    {maxProjectVersion: 37, tagVersion: 5},
    {maxProjectVersion: 43, tagVersion: 6},
  ],
  ComponentChain: [
    {maxProjectVersion: 37, tagVersion: 2},
    {maxProjectVersion: 43, tagVersion: 3},
  ],
  IngestSettings: [
    {maxProjectVersion: 42, tagVersion: 1},
    {maxProjectVersion: 43, tagVersion: 2},
  ],
  Markers: [
    {maxProjectVersion: 37, tagVersion: 3},
    {maxProjectVersion: 43, tagVersion: 4},
  ],
  MasterClip: [
    {maxProjectVersion: 37, tagVersion: 10},
    {maxProjectVersion: 41, tagVersion: 11},
    {maxProjectVersion: 43, tagVersion: 12},
  ],
  Media: [
    {maxProjectVersion: 37, tagVersion: 26},
    {maxProjectVersion: 42, tagVersion: 27},
    {maxProjectVersion: 43, tagVersion: 30},
  ],
  MediaSource: [
    {maxProjectVersion: 37, tagVersion: 3},
    {maxProjectVersion: 43, tagVersion: 4},
  ],
  PointComponentParam: [{maxProjectVersion: 43, tagVersion: 3}],
  ProjectSettings: [
    {maxProjectVersion: 33, tagVersion: 17},
    {maxProjectVersion: 40, tagVersion: 18},
    {maxProjectVersion: 41, tagVersion: 19},
    {maxProjectVersion: 42, tagVersion: 20},
    {maxProjectVersion: 43, tagVersion: 21},
  ],
  ProjectViewState: [{maxProjectVersion: 37, tagVersion: 2}],
  Sequence: [{maxProjectVersion: 43, tagVersion: 11}],
  SubClip: [
    {maxProjectVersion: 42, tagVersion: 5},
    {maxProjectVersion: 43, tagVersion: 6},
  ],
  Track: [{maxProjectVersion: 43, tagVersion: 3}],
  TrackItem: [{maxProjectVersion: 43, tagVersion: 3}],
  VideoClipTrackItem: [
    {maxProjectVersion: 33, tagVersion: 5},
    {maxProjectVersion: 42, tagVersion: 6},
    {maxProjectVersion: 43, tagVersion: 8},
  ],
  VideoComponentChain: [
    {maxProjectVersion: 33, tagVersion: 1},
    {maxProjectVersion: 37, tagVersion: 2},
    {maxProjectVersion: 43, tagVersion: 3},
  ],
  VideoComponentParam: [{maxProjectVersion: 43, tagVersion: 9}],
  VideoFilterComponent: [
    {maxProjectVersion: 37, tagVersion: 7},
    {maxProjectVersion: 41, tagVersion: 8},
    {maxProjectVersion: 43, tagVersion: 9},
  ],
  VideoSettings: [{maxProjectVersion: 43, tagVersion: 9}],
  VideoStream: [
    {maxProjectVersion: 37, tagVersion: 16},
    {maxProjectVersion: 42, tagVersion: 19},
    {maxProjectVersion: 43, tagVersion: 21},
  ],
  VideoTrackGroup: [
    {maxProjectVersion: 37, tagVersion: 10},
    {maxProjectVersion: 39, tagVersion: 11},
    {maxProjectVersion: 40, tagVersion: 12},
    {maxProjectVersion: 43, tagVersion: 13},
  ],
  VideoTransitionTrackItem: [{maxProjectVersion: 43, tagVersion: 5}],
};

const VIDEO_PARAMETER_DEFAULTS: Record<string, VideoParameterDefault> = {
  "0fde4e9f-f895-4ba3-b0fe-9a6feafda583": {
    controlType: "5",
    lowerBound: "0",
    upperBound: "18446744073709551615",
  },
  "2f2eb0a3-318c-4a93-99fc-f1d319edc864": {
    controlType: "13",
    lowerBound: "0",
    upperBound: "4294967295",
  },
  "6e02e8bb-2569-46b2-8ab1-4ab11c43e9c8": {
    controlType: "7",
    lowerBound: "-32768",
    upperBound: "32767",
  },
  "a4ff2d6e-7ac2-44f8-9d52-17d9ca50e542": {
    controlType: "8",
    lowerBound: "0",
    upperBound: "1",
  },
  "cc12343e-f113-4d3b-ae05-b287db77d461": {
    controlType: "4",
    lowerBound: "false",
    upperBound: "true",
  },
  "fe47129e-6c94-4fc0-95d5-c056a517aaf3": {
    controlType: "2",
    lowerBound: "0",
    upperBound: "100",
  },
};

const FALLBACK_VIDEO_PARAMETER_DEFAULT: VideoParameterDefault = {
  controlType: "2",
  lowerBound: "0",
  upperBound: "100",
};

const AUDIO_PARAMETER_CONTROL_TYPES: Record<string, string> = {
  "32657501-3aa4-445f-a49b-d09ecb9fa1ae": "4",
  "a714635e-a628-4b27-9d59-77eba47dbc1a": "2",
};

const STATIC_SPARSE_TAG_DEFAULTS: Record<string, SparseChildRule[]> = {
  ArbVideoComponentParam: [
    {childTag: "IsTimeVarying", xmlContent: "<IsTimeVarying>false</IsTimeVarying>"},
    {
      childTag: "ParameterControlType",
      xmlContent: "<ParameterControlType>10</ParameterControlType>",
    },
    {
      childTag: "StartKeyframeValue",
      xmlContent:
        '<StartKeyframeValue Encoding="base64" BinaryHash="00000000-0000-0000-0000-000000000000">\n__INDENT__</StartKeyframeValue>',
    },
  ],
  AudioClipTrack: [
    {childTag: "RecordChannel", xmlContent: "<RecordChannel>0</RecordChannel>"},
  ],
  AudioComponentChain: [
    {
      childTag: "AudioChannelLayout",
      xmlContent:
        '<AudioChannelLayout>[{"channellabel":100},{"channellabel":101}]</AudioChannelLayout>',
    },
    {childTag: "ChannelType", xmlContent: "<ChannelType>1</ChannelType>"},
    {childTag: "FrameRate", xmlContent: "<FrameRate>5292000</FrameRate>"},
    {childTag: "AutomationMode", xmlContent: "<AutomationMode>1</AutomationMode>"},
  ],
  AudioSettings: [
    {childTag: "FrameRate", xmlContent: "<FrameRate>5292000</FrameRate>"},
    {childTag: "ChannelType", xmlContent: "<ChannelType>1</ChannelType>"},
  ],
  AudioStream: [{childTag: "SampleType", xmlContent: "<SampleType>7</SampleType>"}],
  AudioTrack: [
    {childTag: "ChannelType", xmlContent: "<ChannelType>1</ChannelType>"},
    {childTag: "FrameRate", xmlContent: "<FrameRate>5292000</FrameRate>"},
    {childTag: "AutomationMode", xmlContent: "<AutomationMode>1</AutomationMode>"},
    {childTag: "SubType", xmlContent: "<SubType>1</SubType>"},
    {childTag: "Assign", xmlContent: "<Assign>1</Assign>"},
    {childTag: "Solo", xmlContent: "<Solo>0</Solo>"},
    {childTag: "MutedBySolo", xmlContent: "<MutedBySolo>0</MutedBySolo>"},
  ],
  AudioTrackInlet: [
    {
      childTag: "Sources",
      xmlContent: '<Sources Version="1">\n__INDENT__</Sources>',
    },
    {childTag: "ChannelType", xmlContent: "<ChannelType>1</ChannelType>"},
    {childTag: "FrameRate", xmlContent: "<FrameRate>5292000</FrameRate>"},
  ],
  AudioTransitionTrackItem: [
    {childTag: "ChannelType", xmlContent: "<ChannelType>1</ChannelType>"},
    {childTag: "FrameRate", xmlContent: "<FrameRate>5292000</FrameRate>"},
    {
      childTag: "FadeShapeType",
      maxTargetVersion: 43,
      minTargetVersion: 43,
      xmlContent: "<FadeShapeType>1</FadeShapeType>",
    },
    {
      childTag: "FadeShapeValue",
      maxTargetVersion: 43,
      minTargetVersion: 43,
      xmlContent: "<FadeShapeValue>19</FadeShapeValue>",
    },
    {
      childTag: "CrossfadeSymmetry",
      maxTargetVersion: 43,
      minTargetVersion: 43,
      xmlContent: "<CrossfadeSymmetry>0</CrossfadeSymmetry>",
    },
  ],
  Clip: [{childTag: "Node", xmlContent: '<Node Version="1">\n__INDENT__</Node>'}],
  ClipLoggingInfo: [
    {
      childTag: "MediaFrameRate",
      xmlContent: "<MediaFrameRate>9223372036854775807</MediaFrameRate>",
    },
  ],
  Component: [
    {childTag: "ID", xmlContent: "<ID>1</ID>"},
    {childTag: "Bypass", xmlContent: "<Bypass>false</Bypass>"},
    {childTag: "Intrinsic", xmlContent: "<Intrinsic>false</Intrinsic>"},
    {
      childTag: "ArchivedType",
      minTargetVersion: 38,
      xmlContent: "<ArchivedType>0</ArchivedType>",
    },
  ],
  MasterClip: [
    {
      childTag: "OriginatingMasterClipID",
      maxTargetVersion: 41,
      minTargetVersion: 38,
      xmlContent:
        "<OriginatingMasterClipID>00000000-0000-0000-0000-000000000000</OriginatingMasterClipID>",
    },
    {
      childTag: "OriginatingProjectGuid",
      maxTargetVersion: 41,
      minTargetVersion: 38,
      xmlContent:
        "<OriginatingProjectGuid>00000000-0000-0000-0000-000000000000</OriginatingProjectGuid>",
    },
  ],
  PointComponentParam: [
    {childTag: "IsTimeVarying", xmlContent: "<IsTimeVarying>false</IsTimeVarying>"},
    {
      childTag: "ParameterControlType",
      xmlContent: "<ParameterControlType>6</ParameterControlType>",
    },
  ],
  ProjectItem: [
    {childTag: "Node", xmlContent: '<Node Version="1">\n__INDENT__</Node>'},
    {childTag: "Name", xmlContent: "<Name></Name>"},
  ],
  ProjectItemContainer: [
    {childTag: "Items", xmlContent: '<Items Version="1">\n__INDENT__</Items>'},
  ],
  ScratchDiskSettings: [
    {
      childTag: "CapturedAudioLocation0",
      maxTargetVersion: 42,
      xmlContent: "<CapturedAudioLocation0>SameAsProject</CapturedAudioLocation0>",
    },
  ],
  Track: [
    {childTag: "Node", xmlContent: '<Node Version="1">\n__INDENT__</Node>'},
    {childTag: "IsLocked", xmlContent: "<IsLocked>false</IsLocked>"},
    {childTag: "IsSyncLocked", xmlContent: "<IsSyncLocked>true</IsSyncLocked>"},
    {childTag: "IsMuted", xmlContent: "<IsMuted>false</IsMuted>"},
  ],
  TrackItem: [{childTag: "Start", xmlContent: "<Start>0</Start>"}],
  VideoClipTrackItem: [
    {
      childTag: "IsCreatedWithNewColorManagement",
      maxTargetVersion: 43,
      minTargetVersion: 43,
      xmlContent:
        "<IsCreatedWithNewColorManagement>true</IsCreatedWithNewColorManagement>",
    },
  ],
  VideoComponentChain: [
    {childTag: "DefaultMotion", xmlContent: "<DefaultMotion>true</DefaultMotion>"},
    {
      childTag: "DefaultOpacity",
      xmlContent: "<DefaultOpacity>true</DefaultOpacity>",
    },
    {
      childTag: "DefaultMotionComponentID",
      xmlContent: "<DefaultMotionComponentID>1</DefaultMotionComponentID>",
    },
    {
      childTag: "DefaultOpacityComponentID",
      xmlContent: "<DefaultOpacityComponentID>2</DefaultOpacityComponentID>",
    },
  ],
  VideoSettings: [
    {childTag: "FrameRate", xmlContent: "<FrameRate>8475667200</FrameRate>"},
    {childTag: "FrameSize", xmlContent: "<FrameSize>0,0,720,480</FrameSize>"},
    {
      childTag: "PixelAspectRatio",
      xmlContent: "<PixelAspectRatio>10,11</PixelAspectRatio>",
    },
    {
      childTag: "MaximumBitDepth",
      xmlContent: "<MaximumBitDepth>false</MaximumBitDepth>",
    },
  ],
  VideoStream: [
    {
      childTag: "FrameRate",
      xmlContent: "<FrameRate>9223372036854775807</FrameRate>",
    },
    {
      childTag: "InputLUTSpecified",
      minTargetVersion: 38,
      xmlContent: "<InputLUTSpecified>false</InputLUTSpecified>",
    },
    {
      childTag: "InputLUTID",
      maxTargetVersion: 41,
      minTargetVersion: 38,
      xmlContent: "<InputLUTID>00000000-0000-0000-0000-000000000000</InputLUTID>",
    },
    {
      childTag: "OverriddenColorSpace",
      maxTargetVersion: 42,
      minTargetVersion: 38,
      xmlContent: "<OverriddenColorSpace>{}</OverriddenColorSpace>",
    },
    {
      childTag: "SelectedColorSpace",
      maxTargetVersion: 42,
      minTargetVersion: 38,
      xmlContent: "<SelectedColorSpace>{}</SelectedColorSpace>",
    },
  ],
  VideoTrackGroup: [
    {
      childTag: "PixelAspectRatio",
      maxTargetVersion: 42,
      xmlContent: "<PixelAspectRatio>1,1</PixelAspectRatio>",
    },
    {
      childTag: "FieldType",
      maxTargetVersion: 42,
      xmlContent: "<FieldType>0</FieldType>",
    },
    {
      childTag: "AllowLinearCompositing",
      maxTargetVersion: 42,
      xmlContent: "<AllowLinearCompositing>true</AllowLinearCompositing>",
    },
    {
      childTag: "ImmersiveVideoVRConfiguration",
      maxTargetVersion: 42,
      xmlContent:
        '<ImmersiveVideoVRConfiguration>{"ambisonicsHRIR":"","ambisonicsMonitoringType":0,"capturedHorizontalView":360,"capturedVerticalView":180,"fieldOfHorizontalView":108,"fieldOfVerticalView":108,"projectionType":0,"stereoscopicEye":0,"stereoscopicType":0,"version":3}</ImmersiveVideoVRConfiguration>',
    },
    {
      childTag: "WorkingColorSpaceConfiguration",
      maxTargetVersion: 42,
      minTargetVersion: 38,
      xmlContent:
        '<WorkingColorSpaceConfiguration>{"workingSpaceConfigVersion":1,"workingSpaceID":"BT.709 RGB Full","workingSpaceIsLinearized":0}</WorkingColorSpaceConfiguration>',
    },
    {
      childTag: "WorkingColorSpace",
      maxTargetVersion: 42,
      minTargetVersion: 40,
      xmlContent:
        '<WorkingColorSpace>{"baseColorProfile":{"colorProfileName":"BT.709 RGB Full"},"baseProfileType":1}</WorkingColorSpace>',
    },
    {
      childTag: "ColorManagementSettings",
      maxTargetVersion: 42,
      minTargetVersion: 40,
      xmlContent:
        '<ColorManagementSettings>{"autoToneMapEnabled":true,"enableLogColorManagement":1,"graphicsWhiteLuminance":203,"lutInterpolationMethod":1}</ColorManagementSettings>',
    },
    {
      childTag: "IsCreatedWithNewColorManagement",
      maxTargetVersion: 43,
      minTargetVersion: 43,
      xmlContent:
        "<IsCreatedWithNewColorManagement>true</IsCreatedWithNewColorManagement>",
    },
    {
      childTag: "AutoInputGamutCompressionEnabled",
      maxTargetVersion: 43,
      minTargetVersion: 43,
      xmlContent:
        "<AutoInputGamutCompressionEnabled>true</AutoInputGamutCompressionEnabled>",
    },
    {
      childTag: "ToneMappingDesaturation",
      maxTargetVersion: 43,
      minTargetVersion: 43,
      xmlContent: "<ToneMappingDesaturation>0.5</ToneMappingDesaturation>",
    },
    {
      childTag: "IsGraphicsWhiteSameAsProject",
      maxTargetVersion: 43,
      minTargetVersion: 43,
      xmlContent: "<IsGraphicsWhiteSameAsProject>false</IsGraphicsWhiteSameAsProject>",
    },
    {
      childTag: "IsColorAwareEffectsEnabledSameAsProject",
      maxTargetVersion: 43,
      minTargetVersion: 43,
      xmlContent:
        "<IsColorAwareEffectsEnabledSameAsProject>false</IsColorAwareEffectsEnabledSameAsProject>",
    },
    {
      childTag: "ColorManagementSettings",
      maxTargetVersion: 43,
      minTargetVersion: 43,
      xmlContent:
        '<ColorManagementSettings>{"enableLogColorManagement":1,"graphicsWhiteLuminance":203,"lutInterpolationMethod":1}</ColorManagementSettings>',
    },
  ],
  VideoTransitionTrackItem: [
    {
      childTag: "StartPosition",
      xmlContent: "<StartPosition>0.5,0.5</StartPosition>",
    },
    {childTag: "EndPosition", xmlContent: "<EndPosition>0.5,0.5</EndPosition>"},
    {childTag: "StartPercent", xmlContent: "<StartPercent>0</StartPercent>"},
    {
      childTag: "CenterPosition",
      xmlContent: "<CenterPosition>0.5,0.5</CenterPosition>",
    },
    {childTag: "EndPercent", xmlContent: "<EndPercent>1</EndPercent>"},
    {childTag: "BorderWidth", xmlContent: "<BorderWidth>0</BorderWidth>"},
    {childTag: "BorderColor", xmlContent: "<BorderColor>0,0,0</BorderColor>"},
    {
      childTag: "SwitchSources",
      xmlContent: "<SwitchSources>false</SwitchSources>",
    },
    {childTag: "Reverse", xmlContent: "<Reverse>false</Reverse>"},
    {childTag: "Direction", xmlContent: "<Direction>0</Direction>"},
    {
      childTag: "AntiAliasQuality",
      xmlContent: "<AntiAliasQuality>1</AntiAliasQuality>",
    },
  ],
};

export const getPrVersionLabel = (version: number): string => {
  const known = PR_VERSION_SIGNATURES[version];

  if (known) {
    return `Adobe Premiere Pro ${known.displayVersion} (${known.yearLabel})`;
  }

  return version > 45
    ? `Adobe Premiere Pro (внутренняя версия ${version})`
    : `Adobe Premiere Pro v${version}`;
};

export const getVersionLabel = getPrVersionLabel;

export const isGzipFormat = (bytes: Uint8Array): boolean => {
  return (
    bytes.length >= 2 && bytes[0] === GZIP_MAGIC_BYTE_1 && bytes[1] === GZIP_MAGIC_BYTE_2
  );
};

export const isNullByteCorrupted = (bytes: Uint8Array): boolean => {
  if (bytes.length === 0) {
    return true;
  }

  const sampleLimit = Math.min(bytes.length, NULL_CHECK_SAMPLE_LIMIT);

  for (let index = 0; index < sampleLimit; index += 1) {
    if (bytes[index] !== 0) {
      return false;
    }
  }

  return true;
};

export const decompressPrproj = (bytes: Uint8Array): string => {
  if (isGzipFormat(bytes)) {
    const uncompressed = gunzipSync(bytes);

    return new TextDecoder("utf-8").decode(uncompressed);
  }

  return new TextDecoder("utf-8").decode(bytes);
};

export const extractBuildVersion = (xml: string): string | undefined => {
  const modifiedMatch =
    /<MZ\.BuildVersion\.Modified>([^<]+)<\/MZ\.BuildVersion\.Modified>/i.exec(xml);

  const createdMatch =
    /<MZ\.BuildVersion\.Created>([^<]+)<\/MZ\.BuildVersion\.Created>/i.exec(xml);

  const rawValue = modifiedMatch?.[1] ?? createdMatch?.[1];

  return rawValue ? rawValue.split(" - ", 1)[0].trim() : undefined;
};

export const inferVersionFromMetadata = (
  xml: string,
  buildVersion?: string
): number | undefined => {
  if (buildVersion) {
    const matchedPrefix = BUILD_PREFIX_TO_INTERNAL_VERSION.find((entry) =>
      buildVersion.startsWith(entry.prefix)
    );

    if (matchedPrefix) {
      return matchedPrefix.internalVersion;
    }
  }

  if (
    /<Sequence\b[^>]*\bVersion="12"/.test(xml) ||
    /<Track\b[^>]*\bVersion="4"/.test(xml)
  ) {
    return 45;
  }

  if (/<Media\b[^>]*\bVersion="30"/.test(xml)) {
    return 43;
  }

  return /<ProjectSettings\b[^>]*\bVersion="20"/.test(xml) ? 42 : undefined;
};

export const extractProjectVersion = (xml: string): number | undefined => {
  const objectIdMatch = /<Project\b[^>]*\bObjectID="1"[^>]*\bVersion="(\d+)"/i.exec(xml);

  if (objectIdMatch) {
    return Number(objectIdMatch[1]);
  }

  const reverseMatch = /<Project\b[^>]*\bVersion="(\d+)"[^>]*\bObjectID="1"/i.exec(xml);

  if (reverseMatch) {
    return Number(reverseMatch[1]);
  }

  const genericMatch = /<Project\b[^>]*\bVersion="(\d+)"/i.exec(xml);

  return genericMatch ? Number(genericMatch[1]) : undefined;
};

export const parsePrprojHeader = (bytes: Uint8Array): ParsedPrprojInfo => {
  if (isNullByteCorrupted(bytes)) {
    return {
      detectedVersion: 0,
      displayVersion: "Ошибка",
      errorMessage:
        "Файл проекта поврежден: содержимое состоит из пустых нулевых байтов!",
      isGzipped: false,
      yearLabel: "Ошибка",
    };
  }

  try {
    const isGzipped = isGzipFormat(bytes);

    const xml = decompressPrproj(bytes);

    if (!xml.includes("<Project")) {
      return {
        detectedVersion: 0,
        displayVersion: "Неизвестно",
        errorMessage: "Файл не содержит корневых элементов проекта Premiere Pro!",
        isGzipped,
        yearLabel: "Неизвестно",
      };
    }

    const headerVersion = extractProjectVersion(xml);

    if (!headerVersion || headerVersion <= 0) {
      return {
        detectedVersion: 0,
        displayVersion: "Неизвестно",
        errorMessage: "Не удалось обнаружить атрибут Version в структуре проекта!",
        isGzipped,
        yearLabel: "Неизвестно",
      };
    }

    const buildVersion = extractBuildVersion(xml);

    const inferredVersion = inferVersionFromMetadata(xml, buildVersion);

    const isHeaderModified = Boolean(inferredVersion && headerVersion < inferredVersion);

    const detectedVersion = isHeaderModified
      ? (inferredVersion as number)
      : headerVersion;

    const known = PR_VERSION_SIGNATURES[detectedVersion];

    const displayVersion = known ? known.displayVersion : `${detectedVersion}.X`;

    const yearLabel = known ? known.yearLabel : "Неизвестно";

    return {
      buildVersion,
      detectedVersion,
      displayVersion,
      headerVersion,
      isGzipped,
      isHeaderModified,
      yearLabel,
    };
  } catch (error) {
    return {
      detectedVersion: 0,
      displayVersion: "Ошибка",
      errorMessage:
        error instanceof Error
          ? error.message
          : "Не удалось прочитать или распаковать файл проекта!",
      isGzipped: false,
      yearLabel: "Ошибка",
    };
  }
};

const resolveTargetTagVersion = (
  tagName: string,
  currentVersion: number,
  targetProjectVersion: number
): number => {
  if (tagName === "Project") {
    return targetProjectVersion;
  }

  if (targetProjectVersion >= 44) {
    return currentVersion;
  }

  const thresholds = TAG_VERSION_THRESHOLDS[tagName];

  if (!thresholds) {
    return currentVersion;
  }

  const matchingThreshold = thresholds.find(
    (threshold) => targetProjectVersion <= threshold.maxProjectVersion
  );

  return matchingThreshold && currentVersion > matchingThreshold.tagVersion
    ? matchingThreshold.tagVersion
    : currentVersion;
};

const isRuleApplicableToVersion = (
  rule: SparseChildRule,
  targetProjectVersion: number
): boolean => {
  const isAboveMin =
    rule.minTargetVersion === undefined || targetProjectVersion >= rule.minTargetVersion;

  const isBelowMax =
    rule.maxTargetVersion === undefined || targetProjectVersion <= rule.maxTargetVersion;

  return isAboveMin && isBelowMax;
};

const buildVideoComponentParameterLines = (
  frame: XmlStackFrame,
  childIndent: string
): string[] => {
  const parameterDefault =
    VIDEO_PARAMETER_DEFAULTS[frame.classId] ?? FALLBACK_VIDEO_PARAMETER_DEFAULT;

  const lines: string[] = [];

  if (!frame.children.has("Name")) {
    lines.push(`${childIndent}<Name> </Name>`);
  }

  if (!frame.children.has("IsTimeVarying")) {
    lines.push(`${childIndent}<IsTimeVarying>false</IsTimeVarying>`);
  }

  if (!frame.children.has("ParameterControlType")) {
    lines.push(
      `${childIndent}<ParameterControlType>${parameterDefault.controlType}</ParameterControlType>`
    );
  }

  if (!frame.children.has("LowerBound")) {
    lines.push(`${childIndent}<LowerBound>${parameterDefault.lowerBound}</LowerBound>`);
  }

  if (!frame.children.has("UpperBound")) {
    lines.push(`${childIndent}<UpperBound>${parameterDefault.upperBound}</UpperBound>`);
  }

  return lines;
};

const buildAudioComponentParameterLines = (
  frame: XmlStackFrame,
  targetProjectVersion: number,
  childIndent: string
): string[] => {
  const controlType = AUDIO_PARAMETER_CONTROL_TYPES[frame.classId] ?? "2";

  const lines: string[] = [];

  if (!frame.children.has("ParameterControlType")) {
    lines.push(
      `${childIndent}<ParameterControlType>${controlType}</ParameterControlType>`
    );
  }

  if (!frame.children.has("RangeLocked")) {
    lines.push(`${childIndent}<RangeLocked>true</RangeLocked>`);
  }

  if (!frame.children.has("IsTimeVarying")) {
    lines.push(`${childIndent}<IsTimeVarying>false</IsTimeVarying>`);
  }

  if (targetProjectVersion <= 42 && !frame.children.has("Timestamp")) {
    lines.push(`${childIndent}<Timestamp>0</Timestamp>`);
  }

  return lines;
};

const buildDynamicTagLines = (
  frame: XmlStackFrame,
  targetProjectVersion: number,
  context: AdaptationContext,
  childIndent: string
): string[] => {
  if (frame.tagName === "VideoComponentParam") {
    return buildVideoComponentParameterLines(frame, childIndent);
  }

  if (frame.tagName === "AudioComponentParam") {
    return buildAudioComponentParameterLines(frame, targetProjectVersion, childIndent);
  }

  if (frame.tagName === "Sequence") {
    const lines: string[] = [];

    if (targetProjectVersion <= 42 && !frame.children.has("ID")) {
      lines.push(`${childIndent}<ID>${context.nextSequenceId}</ID>`);
      context.nextSequenceId += 1;
    }

    if (!frame.children.has("PreviewFormatIdentifier")) {
      lines.push(
        `${childIndent}<PreviewFormatIdentifier>${context.defaultPreviewFormatId}</PreviewFormatIdentifier>`
      );
    }

    return lines;
  }

  if (
    frame.tagName === "Project" &&
    targetProjectVersion <= 42 &&
    !frame.children.has("NextSequenceID")
  ) {
    const nextId = Math.max(2, context.totalSequences + 1);

    return [`${childIndent}<NextSequenceID>${nextId}</NextSequenceID>`];
  }

  return [];
};

const getMissingTagsForFrame = (
  frame: XmlStackFrame,
  targetProjectVersion: number,
  context: AdaptationContext
): string[] => {
  if (targetProjectVersion > 43) {
    return [];
  }

  const childIndent = `${frame.indent}\t`;

  const staticRules = STATIC_SPARSE_TAG_DEFAULTS[frame.tagName];

  if (!staticRules) {
    return buildDynamicTagLines(frame, targetProjectVersion, context, childIndent);
  }

  const restoredLines: string[] = [];

  for (const rule of staticRules) {
    if (
      frame.children.has(rule.childTag) ||
      !isRuleApplicableToVersion(rule, targetProjectVersion)
    ) {
      continue;
    }

    const formattedXml = rule.xmlContent.split("__INDENT__").join(childIndent);

    restoredLines.push(`${childIndent}${formattedXml}`);
  }

  return restoredLines;
};

const TAGS_STRIPPED_LE_43 = new Set([
  "BlueprintVideoComponentChain",
  "IsSpecialMCE",
  "OwnsMasterClip",
  "SelectionComponents",
]);

const TAGS_STRIPPED_LE_42_GLOBAL = new Set([
  "ColorAwareEffectsEnabled",
  "ProxyWatermarkDefaultImageFullPath",
  "ProxyWatermarkDoOverlay",
  "ProxyWatermarkUsingCustomImage",
  "Variables",
]);

const TAGS_STRIPPED_LE_42_VIDEO_TRACK_GROUP = new Set([
  "AutoInputGamutCompressionEnabled",
  "AutoToneMapEnabled",
  "ColorManagementSettings",
  "DefaultGraphicsWhiteLuminance",
  "GamutCompressionAlgorithm",
  "HDRGraphicsWhiteLuminance",
  "IsColorAwareEffectsEnabledSameAsProject",
  "IsCreatedWithNewColorManagement",
  "IsGraphicsWhiteSameAsProject",
  "OutputColorSpace",
  "ToneMappingAlgorithm",
  "ToneMappingDesaturation",
  "ToneMappingKnee",
]);

const TAGS_STRIPPED_LE_42_VIDEO_STREAM = new Set([
  "IsColorSpaceSelected",
  "IsColorSpacOverridden",
  "OriginalColorSpace",
  "OriginalPAR",
  "OverriddenColorSpace",
  "PreserveRGB",
  "SelectedColorSpace",
]);

const TAGS_STRIPPED_LE_41_GLOBAL = new Set([
  "ChannelConfigData",
  "PreRenderComponentChainHashVersion",
]);

const TAGS_STRIPPED_LE_37_GLOBAL = new Set([
  "ArchivedType",
  "FreeformView.Scale",
  "GraphicsWhiteConfiguration",
  "GraphicsWhiteLuminance",
  "IconFilter.FilterType",
  "IgnoreAlpha",
  "InputLUTID",
  "InputLUTSpecified",
  "MasterClipChangeVersion",
  "OriginatingMasterClipID",
  "OriginatingProjectGuid",
  "Project.CloudSyncEnabled",
  "Project.IsEAProject",
  "SideNav.Visible",
  "SideNav.Width",
  "WorkingColorSpaceConfiguration",
]);

const DATA_TRACK_GROUP_TYPE_GUID = "d8143ffe-eec4-4d2a-a909-d5f7bf094dc5";

const LEGACY_CAPTURE_SETTINGS_LINES = [
  "\t\t<RecordModuleDisplayName>DV</RecordModuleDisplayName>",
  "\t\t<SupportedFileExtension>avi</SupportedFileExtension>",
  "\t\t<RecorderID>0ae2b9b7-6efc-424f-aadf-1a2dedd5e8ff</RecorderID>",
  "\t\t<VideoFrameRate>8475667200</VideoFrameRate>",
  "\t\t<VideoFrameSize>0,0,720,480</VideoFrameSize>",
  "\t\t<VideoCompressorFourCC>0</VideoCompressorFourCC>",
  "\t\t<AudioCompressorFourCC>1380013856</AudioCompressorFourCC>",
  "\t\t<AudioCompressorDisplayName>Uncompressed</AudioCompressorDisplayName>",
  "\t\t<AudioFrameRate>7938000</AudioFrameRate>",
  "\t\t<AudioSampleType>3</AudioSampleType>",
  "\t\t<AudioChannelType>1</AudioChannelType>",
  "\t\t<AbortCaptureOnDroppedFrames>false</AbortCaptureOnDroppedFrames>",
];

const BLOCKS_STRIPPED_LE_42 = new Set([
  "CompoundProjectItem",
  "GenerativeExtendSession",
  "VariableLayer",
  "Variables",
]);

const BLOCKS_STRIPPED_LE_37 = new Set(["ChangesColumn", "DataTrackGroup"]);

interface ParsedXmlLine {
  attributes: string;
  hasClosingOnSameLine: boolean;
  indent: string;
  isSelfClosing: boolean;
  tagName: string;
}

const parseXmlOpenLine = (rawLine: string): ParsedXmlLine | undefined => {
  let indentLength = 0;

  while (rawLine[indentLength] === "\t") {
    indentLength += 1;
  }

  if (rawLine[indentLength] !== "<" || rawLine[indentLength + 1] === "/") {
    return undefined;
  }

  const closeBracketIndex = rawLine.indexOf(">", indentLength + 1);

  if (closeBracketIndex === -1) {
    return undefined;
  }

  const innerHeader = rawLine.slice(indentLength + 1, closeBracketIndex);

  if (innerHeader.startsWith("?") || innerHeader.startsWith("!")) {
    return undefined;
  }

  const spaceIndex = innerHeader.search(/\s/);

  const rawTagName = spaceIndex === -1 ? innerHeader : innerHeader.slice(0, spaceIndex);

  const tagName = rawTagName.endsWith("/") ? rawTagName.slice(0, -1) : rawTagName;

  if (!/^[A-Za-z0-9_.:-]+$/.test(tagName)) {
    return undefined;
  }

  const attributes = spaceIndex === -1 ? "" : innerHeader.slice(spaceIndex);

  const isSelfClosing = innerHeader.endsWith("/");

  const hasClosingOnSameLine = rawLine.includes(`</${tagName}>`);

  return {
    attributes,
    hasClosingOnSameLine,
    indent: rawLine.slice(0, indentLength),
    isSelfClosing,
    tagName,
  };
};

const collectCompoundRewrites = (lines: string[]): Map<string, string> => {
  const rewrites = new Map<string, string>();

  let currentCompoundUid: string | undefined;

  for (const line of lines) {
    if (!currentCompoundUid) {
      if (line.includes("<CompoundProjectItem")) {
        const uidMatch = /\bObjectUID="([^"]+)"/.exec(line);

        currentCompoundUid = uidMatch?.[1];
      }

      continue;
    }

    if (line.includes("<EditingProjectItem")) {
      const referenceMatch = /\bObjectURef="([^"]+)"/.exec(line);

      if (referenceMatch?.[1]) {
        rewrites.set(currentCompoundUid, referenceMatch[1]);
      }
    }

    if (line.includes("</CompoundProjectItem>")) {
      currentCompoundUid = undefined;
    }
  }

  return rewrites;
};

const shouldSkipBlockStart = (
  parsed: ParsedXmlLine,
  isInVideoTrackGroup: boolean,
  targetProjectVersion: number
): boolean => {
  if (parsed.isSelfClosing || parsed.hasClosingOnSameLine) {
    return false;
  }

  if (parsed.tagName === "MediaDependencyMap") {
    return true;
  }

  const shouldStripLe42Block =
    targetProjectVersion <= 42 &&
    BLOCKS_STRIPPED_LE_42.has(parsed.tagName) &&
    (parsed.tagName !== "Variables" || parsed.attributes.includes("ObjectID="));

  const shouldStripLe37Block =
    targetProjectVersion <= 37 && BLOCKS_STRIPPED_LE_37.has(parsed.tagName);

  return (
    (isInVideoTrackGroup && parsed.tagName === "ComponentOwner") ||
    shouldStripLe42Block ||
    shouldStripLe37Block
  );
};

const rewriteCompoundReferenceLine = (
  line: string,
  compoundRewrites: Map<string, string>
): string => {
  if (compoundRewrites.size === 0 || !line.includes('ObjectURef="')) {
    return line;
  }

  const referenceMatch = /\bObjectURef="([^"]+)"/.exec(line);

  const targetUid = referenceMatch?.[1]
    ? compoundRewrites.get(referenceMatch[1])
    : undefined;

  return targetUid
    ? line.split(`ObjectURef="${referenceMatch?.[1]}"`).join(`ObjectURef="${targetUid}"`)
    : line;
};

interface PreprocessState {
  isInDummyCaptureSettings: boolean;
  isInTrackGroups: boolean;
  isInVideoTrackGroup: boolean;
  skippedBlockIndent: string;
  skippedBlockTag?: string;
  trackGroupBuffer?: string[];
  trackGroupIndex: number;
}

const handleDummyCaptureSettingsLine = (
  rawLine: string,
  state: PreprocessState,
  outputLines: string[]
): void => {
  const updatedLine = rawLine
    .replace("<DummyCaptureSettings", "<CaptureSettings")
    .replace(/\bVersion="\d+"/, 'Version="10"');

  outputLines.push(updatedLine, ...LEGACY_CAPTURE_SETTINGS_LINES);

  if (rawLine.includes("</DummyCaptureSettings>")) {
    outputLines.push("\t</CaptureSettings>");
    state.isInDummyCaptureSettings = false;

    return;
  }

  state.isInDummyCaptureSettings = true;
};

const handleTrackGroupLine = (
  rawLine: string,
  state: PreprocessState,
  outputLines: string[]
): void => {
  const buffer = state.trackGroupBuffer;

  if (!buffer) {
    return;
  }

  buffer.push(rawLine);

  if (!rawLine.includes("</TrackGroup>")) {
    return;
  }

  state.trackGroupBuffer = undefined;

  const isDataTrackGroup = buffer.some((line) =>
    line.includes(DATA_TRACK_GROUP_TYPE_GUID)
  );

  if (isDataTrackGroup) {
    return;
  }

  const nextIndex = state.trackGroupIndex;

  state.trackGroupIndex += 1;
  buffer[0] = buffer[0].replace(/\bIndex="\d+"/, () => `Index="${nextIndex}"`);
  outputLines.push(...buffer);
};

const shouldConsumePreprocessState = (
  rawLine: string,
  state: PreprocessState,
  outputLines: string[]
): boolean => {
  if (state.skippedBlockTag) {
    if (rawLine === `${state.skippedBlockIndent}</${state.skippedBlockTag}>`) {
      state.skippedBlockTag = undefined;
      state.skippedBlockIndent = "";
    }

    return true;
  }

  if (state.isInDummyCaptureSettings) {
    if (rawLine.includes("</DummyCaptureSettings>")) {
      state.isInDummyCaptureSettings = false;
      outputLines.push("\t</CaptureSettings>");
    }

    return true;
  }

  if (state.trackGroupBuffer) {
    handleTrackGroupLine(rawLine, state, outputLines);

    return true;
  }

  return false;
};

const shouldSkipParsedOpenLine = (
  rawLine: string,
  parsed: ParsedXmlLine,
  state: PreprocessState,
  targetProjectVersion: number
): boolean => {
  if (!parsed.isSelfClosing && !parsed.hasClosingOnSameLine) {
    if (parsed.tagName === "VideoTrackGroup") {
      state.isInVideoTrackGroup = true;
    }

    if (targetProjectVersion <= 37 && parsed.tagName === "TrackGroups") {
      state.isInTrackGroups = true;
      state.trackGroupIndex = 0;
    }

    if (state.isInTrackGroups && parsed.tagName === "TrackGroup") {
      state.trackGroupBuffer = [rawLine];

      return true;
    }
  }

  if (shouldSkipBlockStart(parsed, state.isInVideoTrackGroup, targetProjectVersion)) {
    state.skippedBlockTag = parsed.tagName;
    state.skippedBlockIndent = parsed.indent;

    return true;
  }

  return false;
};

const preprocessLine = (
  rawLine: string,
  state: PreprocessState,
  targetProjectVersion: number,
  compoundRewrites: Map<string, string>,
  outputLines: string[]
): void => {
  if (shouldConsumePreprocessState(rawLine, state, outputLines)) {
    return;
  }

  if (rawLine.includes("</VideoTrackGroup>")) {
    state.isInVideoTrackGroup = false;
  }

  if (rawLine.includes("</TrackGroups>")) {
    state.isInTrackGroups = false;
  }

  if (targetProjectVersion <= 42 && rawLine.includes("<DummyCaptureSettings")) {
    handleDummyCaptureSettingsLine(rawLine, state, outputLines);

    return;
  }

  const parsed = parseXmlOpenLine(rawLine);

  if (parsed && shouldSkipParsedOpenLine(rawLine, parsed, state, targetProjectVersion)) {
    return;
  }

  outputLines.push(rewriteCompoundReferenceLine(rawLine, compoundRewrites));
};

const preprocessPrprojXml = (xml: string, targetProjectVersion: number): string => {
  if (targetProjectVersion >= 44) {
    return xml;
  }

  const inputLines = xml.split(/\r?\n/);

  const compoundRewrites =
    targetProjectVersion <= 42
      ? collectCompoundRewrites(inputLines)
      : new Map<string, string>();

  const outputLines: string[] = [];

  const state: PreprocessState = {
    isInDummyCaptureSettings: false,
    isInTrackGroups: false,
    isInVideoTrackGroup: false,
    skippedBlockIndent: "",
    trackGroupIndex: 0,
  };

  for (const rawLine of inputLines) {
    preprocessLine(rawLine, state, targetProjectVersion, compoundRewrites, outputLines);
  }

  return outputLines.join("\n");
};

const shouldStripForLe42 = (parentTag: string, tagName: string): boolean => {
  if (TAGS_STRIPPED_LE_42_GLOBAL.has(tagName)) {
    return true;
  }

  if (
    parentTag === "VideoTrackGroup" &&
    TAGS_STRIPPED_LE_42_VIDEO_TRACK_GROUP.has(tagName)
  ) {
    return true;
  }

  const isLe42TrackItemTag =
    parentTag === "VideoClipTrackItem" &&
    (tagName === "ToneMapSettings" || tagName === "IsCreatedWithNewColorManagement");

  return (
    isLe42TrackItemTag ||
    (parentTag === "VideoStream" && TAGS_STRIPPED_LE_42_VIDEO_STREAM.has(tagName))
  );
};

const shouldStripChildTag = (
  parentTag: string,
  tagName: string,
  isSingleLine: boolean,
  targetProjectVersion: number
): boolean => {
  if (!isSingleLine || targetProjectVersion >= 44) {
    return false;
  }

  if (
    TAGS_STRIPPED_LE_43.has(tagName) ||
    (parentTag === "VideoClipTrackItem" && tagName === "GamutCompressionAlgorithm")
  ) {
    return true;
  }

  if (targetProjectVersion <= 42 && shouldStripForLe42(parentTag, tagName)) {
    return true;
  }

  if (targetProjectVersion <= 41 && TAGS_STRIPPED_LE_41_GLOBAL.has(tagName)) {
    return true;
  }

  if (parentTag === "ProjectSettings" && tagName === "ColorManagementSettings") {
    return targetProjectVersion <= 40;
  }

  if (parentTag === "VideoTrackGroup" && tagName === "WorkingColorSpace") {
    return targetProjectVersion <= 39;
  }

  const isLe37GlobalTag =
    targetProjectVersion <= 37 && TAGS_STRIPPED_LE_37_GLOBAL.has(tagName);

  return (
    isLe37GlobalTag ||
    (targetProjectVersion <= 33 &&
      parentTag === "ProjectSettings" &&
      tagName === "UsePreviewCache")
  );
};

const createAdaptationContext = (xml: string): AdaptationContext => {
  const previewMatch = /<PreviewFormatIdentifier>([^<]+)<\/PreviewFormatIdentifier>/.exec(
    xml
  );

  const sequenceMatches = xml.match(/<Sequence\b[^>]*\bVersion="\d+"/g);

  return {
    defaultPreviewFormatId: previewMatch?.[1] ?? FALLBACK_PREVIEW_FORMAT_ID,
    nextSequenceId: 1,
    totalSequences: sequenceMatches ? sequenceMatches.length : 1,
  };
};

const parseXmlCloseLine = (
  rawLine: string
): {indent: string; tagName: string} | undefined => {
  let indentLength = 0;

  while (rawLine[indentLength] === "\t") {
    indentLength += 1;
  }

  if (rawLine[indentLength] !== "<" || rawLine[indentLength + 1] !== "/") {
    return undefined;
  }

  const closeBracketIndex = rawLine.indexOf(">", indentLength + 2);

  if (closeBracketIndex === -1) {
    return undefined;
  }

  const tagName = rawLine.slice(indentLength + 2, closeBracketIndex);

  return /^[A-Za-z0-9_.:-]+$/.test(tagName)
    ? {indent: rawLine.slice(0, indentLength), tagName}
    : undefined;
};

const handleCloseTagLine = (
  rawLine: string,
  closeMatch: {indent: string; tagName: string},
  targetProjectVersion: number,
  context: AdaptationContext,
  stack: XmlStackFrame[],
  outputLines: string[]
): void => {
  const topFrame = stack.at(-1);

  if (
    topFrame &&
    topFrame.indent === closeMatch.indent &&
    topFrame.tagName === closeMatch.tagName
  ) {
    stack.pop();

    if (topFrame.isVersioned) {
      outputLines.push(
        ...getMissingTagsForFrame(topFrame, targetProjectVersion, context)
      );
    }
  }

  outputLines.push(rawLine);
};

const adaptOpenTagLine = (
  rawLine: string,
  openMatch: ParsedXmlLine,
  targetProjectVersion: number,
  stack: XmlStackFrame[]
): string | undefined => {
  const parentFrame = stack.at(-1);

  const parentTag = parentFrame?.tagName ?? "";

  if (
    shouldStripChildTag(
      parentTag,
      openMatch.tagName,
      openMatch.isSelfClosing || openMatch.hasClosingOnSameLine,
      targetProjectVersion
    )
  ) {
    return undefined;
  }

  if (parentFrame) {
    parentFrame.children.add(openMatch.tagName);
  }

  const versionMatch = /\bVersion="(\d+)"/.exec(openMatch.attributes);

  const classIdMatch = /\bClassID="([^"]+)"/.exec(openMatch.attributes);

  let processedLine = rawLine;

  if (versionMatch) {
    const currentVersion = Number(versionMatch[1]);

    const updatedVersion = resolveTargetTagVersion(
      openMatch.tagName,
      currentVersion,
      targetProjectVersion
    );

    if (updatedVersion !== currentVersion) {
      processedLine = rawLine.replace(
        /\bVersion="\d+"/,
        () => `Version="${updatedVersion}"`
      );
    }
  }

  if (!openMatch.isSelfClosing && !openMatch.hasClosingOnSameLine) {
    stack.push({
      children: new Set(),
      classId: classIdMatch?.[1] ?? "",
      indent: openMatch.indent,
      isVersioned: Boolean(versionMatch),
      tagName: openMatch.tagName,
    });
  }

  return processedLine;
};

export const adaptPrprojXml = (xml: string, targetProjectVersion: number): string => {
  const preprocessedXml = preprocessPrprojXml(xml, targetProjectVersion);

  const context = createAdaptationContext(preprocessedXml);

  const inputLines = preprocessedXml.split(/\r?\n/);

  const outputLines: string[] = [];

  const stack: XmlStackFrame[] = [];

  for (const rawLine of inputLines) {
    const closeMatch = parseXmlCloseLine(rawLine);

    if (closeMatch) {
      handleCloseTagLine(
        rawLine,
        closeMatch,
        targetProjectVersion,
        context,
        stack,
        outputLines
      );

      continue;
    }

    const openMatch = parseXmlOpenLine(rawLine);

    if (!openMatch) {
      outputLines.push(rawLine);
      continue;
    }

    const adaptedLine = adaptOpenTagLine(rawLine, openMatch, targetProjectVersion, stack);

    if (adaptedLine !== undefined) {
      outputLines.push(adaptedLine);
    }
  }

  return outputLines.join("\n");
};

export const downgradePrproj = (bytes: Uint8Array, targetVersion: number): Uint8Array => {
  const xml = decompressPrproj(bytes);

  const modifiedXml = adaptPrprojXml(xml, targetVersion);

  const encodedBytes = new TextEncoder().encode(modifiedXml);

  return gzipSync(encodedBytes);
};
