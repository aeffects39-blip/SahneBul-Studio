import { useState } from "react";
import { ScrollView, View, Text, Pressable, TextInput, StyleSheet, Alert, Platform } from "react-native";
import { router } from "expo-router";

const C = {
  bg: "#090713", panel: "#151026", panel2: "#1d1433", border: "#352452",
  text: "#f5f0ff", muted: "#b4a5cf", purple: "#a855f7", pink: "#d946ef",
};
function Action({ title, subtitle, icon, onPress }: {title:string; subtitle:string; icon:string; onPress:()=>void}) {
  return <Pressable onPress={onPress} style={({pressed})=>[s.action, pressed && {opacity:.82, transform:[{scale:.99}]}]}>
    <View style={s.iconBox}><Text style={{fontSize:23}}>{icon}</Text></View>
    <View style={{flex:1}}><Text style={s.actionTitle}>{title}</Text><Text style={s.muted}>{subtitle}</Text></View>
    <Text style={{color:C.muted,fontSize:24}}>›</Text>
  </Pressable>;
}
export default function Home() {
  const info = () => Alert.alert("SahneBul Studio", "Bu mobil başlangıç sürümüdür. İşleme API bağlantısı bir sonraki geliştirme aşamasında eklenecek.");
  return <ScrollView style={s.screen} contentContainerStyle={s.content}>
    <View style={s.hero}>
      <View style={s.pill}><View style={s.dot}/><Text style={s.pillText}>HERKESE AÇIK • ÜCRETSİZ</Text></View>
      <Text style={s.brand}>SahneBul<Text style={{color:C.pink}}> Studio</Text></Text>
      <Text style={s.heroText}>Videolarındaki anları daha kolay bul.</Text>
      <View style={s.glowLine}/>
    </View>
    <Text style={s.section}>HIZLI İŞLEMLER</Text>
    <Action icon="🎯" title="Yüzle sahne bul" subtitle="Fotoğraf ve video üzerinden sahne ara" onPress={()=>router.push("/scenes")}/>
    <Action icon="⬇️" title="Video indir" subtitle="Video bağlantısı ve indirme seçenekleri" onPress={()=>router.push("/download")}/>
    <Action icon="🗂️" title="Projelerim" subtitle="Sonuçlar ve kayıtlı işler (yakında)" onPress={info}/>
    <View style={s.tip}><Text style={s.tipTitle}>Başlangıç sürümü</Text><Text style={s.muted}>Tasarım Android, iPhone ve web için ortak hazırlanıyor. Gerçek video işleme servisleri henüz bağlanmadı.</Text></View>
    <Text style={s.footer}>SAHNEBUL STUDIO  •  0.1.0</Text>
  </ScrollView>;
}
const s = StyleSheet.create({
 screen:{flex:1,backgroundColor:C.bg}, content:{padding:20,paddingTop:34,maxWidth:760,width:"100%",alignSelf:"center",gap:14,paddingBottom:42},
 hero:{padding:22,borderRadius:26,backgroundColor:C.panel,borderWidth:1,borderColor:C.border,overflow:"hidden",marginBottom:8},
 pill:{alignSelf:"flex-start",flexDirection:"row",alignItems:"center",gap:7,backgroundColor:"#28153c",paddingHorizontal:10,paddingVertical:7,borderRadius:99,marginBottom:22},
 dot:{width:7,height:7,borderRadius:8,backgroundColor:"#d946ef"},pillText:{color:"#e9caff",fontSize:10,fontWeight:"800",letterSpacing:1},
 brand:{fontSize:34,fontWeight:"900",color:C.text,letterSpacing:-1},heroText:{color:C.muted,fontSize:15,marginTop:8},
 glowLine:{height:4,width:118,borderRadius:9,marginTop:24,backgroundColor:C.purple},
 section:{fontSize:11,color:C.muted,fontWeight:"800",letterSpacing:1.7,marginTop:8,marginBottom:1},
 action:{flexDirection:"row",alignItems:"center",gap:13,padding:15,borderRadius:18,backgroundColor:C.panel,borderWidth:1,borderColor:C.border,minHeight:84},
 iconBox:{width:48,height:48,borderRadius:15,backgroundColor:C.panel2,alignItems:"center",justifyContent:"center"},
 actionTitle:{color:C.text,fontSize:15,fontWeight:"800",marginBottom:5},muted:{color:C.muted,fontSize:12,lineHeight:18},
 tip:{backgroundColor:"#120d20",borderWidth:1,borderColor:"#2b1d40",borderRadius:17,padding:16,marginTop:7},
 tipTitle:{color:"#e7c7ff",fontSize:13,fontWeight:"800",marginBottom:6},footer:{textAlign:"center",color:"#6d5d87",fontSize:10,letterSpacing:1.4,marginTop:14}
});
